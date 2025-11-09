import * as tar from "tar";
import { DataManager } from "../manager";

export class TarArchive {
  private filename: string;

  constructor(filename: string) {
    this.filename = DataManager.instance.fullPath(filename);
  }

  public async extract() {
    await tar.extract({
      file: this.filename,
      cwd: DataManager.instance.dirPath(this.filename),
    });
  }
}
