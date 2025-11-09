import { stat } from "fs/promises";
import { mkdir } from "fs/promises";
import path from "path";

export class DataManager {
  public static instance = new DataManager();

  private rootDir = path.join(__dirname, "../..", ".data");

  constructor() {}

  public async initialize() {
    await mkdir(this.rootDir, { recursive: true });
  }

  public async ensureDirectoryCreated(dir: string) {
    const fullPath = path.resolve(this.rootDir, dir);

    await mkdir(fullPath, { recursive: true });
  }

  public fullPath(filepath: string) {
    return path.resolve(this.rootDir, filepath);
  }

  public dirPath(filepath: string) {
    return path.dirname(filepath);
  }

  public async exists(filepath: string) {
    return await stat(this.fullPath(filepath))
      .catch(() => false)
      .then((s) => !!s);
  }
}
