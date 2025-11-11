import path from "path";
import { BROWSER_DOWNLOADS_CONFIG } from "../config/browserDownloads";
import { DataDownloader } from "../data/downloader";
import { DataManager } from "../data/manager";
import { PlatformManager } from "../platform/platform";
import { Browser, type BrowserConfig } from "../types/browser";
import { spawn } from "child_process";
import { BROWSER_EXEC_CONFIG } from "../config/browserExec";
import { ServoBrowser } from "./servo";

export abstract class BaseBrowser {
  protected readonly browserId: Browser;
  protected readonly config: BrowserConfig;

  constructor(browserId: Browser, config: BrowserConfig) {
    this.browserId = browserId;
    this.config = config;
  }

  public getOutputPath(): string {
    return path.resolve(process.cwd(), this.config.output);
  }

  public async setup() {
    await this.download();
  }

  public async open(args: string[] = []): Promise<void> {
    const execConfig =
      BROWSER_EXEC_CONFIG[this.browserId][PlatformManager.get()];

    const process = spawn(
      DataManager.instance.fullPath(
        `browser/${this.browserId}/${execConfig.path}`
      ),
      args,
      {
        stdio: "inherit",
        shell: true,
      }
    );

    return new Promise((resolve, reject) => {
      process.on("error", (err) => {
        reject(err);
      });

      process.on("exit", (code) => {
        if (code === 0) resolve();
        else reject(new Error(`Process exited with code ${code}`));
      });
    });
  }

  private async download() {
    const path = `browser/${this.browserId}`;

    if (await DataManager.instance.exists(path)) return;

    const config = BROWSER_DOWNLOADS_CONFIG[this.browserId];
    const { url, extractor } = config[PlatformManager.get()];

    const downloader = new DataDownloader(
      `browser/${this.browserId}/${url.split("/").pop()}`
    );
    await downloader.download(url);

    if (extractor) await downloader.extract(extractor);
  }
}
