import { Browser, type BrowserConfig } from "../types/browser";
import { BaseBrowser } from "./_browser";

export class ServoBrowser extends BaseBrowser {
  constructor(config: BrowserConfig) {
    super(Browser.Servo, config);
  }

  public async run(url: string) {
    const outputPath = this.getOutputPath();

    await this.open([
      "--headless",
      `-o ${outputPath}`,
      "--exit",
      this.config.width && this.config.height
        ? `--window-size=${this.config.width}x${this.config.height}`
        : "",
      `"${url}"`,
    ]);
  }
}
