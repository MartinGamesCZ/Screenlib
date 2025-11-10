import * as unzipper from "unzipper";
import { createReadStream } from "fs";
import { DataManager } from "../manager";

export class ZipArchive {
  private filename: string;

  constructor(filename: string) {
    this.filename = DataManager.instance.fullPath(filename);
  }

  public async extract() {
    await createReadStream(this.filename)
      .pipe(
        unzipper.Extract({ path: DataManager.instance.dirPath(this.filename) })
      )
      .promise();
  }
}
