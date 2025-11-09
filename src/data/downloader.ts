import axios from "axios";
import { writeFile } from "fs/promises";
import { DataManager } from "./manager";
import type { ArchiveType } from "../types/archive";
import { Archive } from "./archive/_archive";

export class DataDownloader {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  public async download(url: string) {
    await DataManager.instance.ensureDirectoryCreated(
      DataManager.instance.dirPath(this.filename)
    );

    const { data } = await axios.get<ArrayBuffer>(url, {
      responseType: "arraybuffer",
    });

    await writeFile(
      DataManager.instance.fullPath(this.filename),
      Buffer.from(data)
    );
  }

  public async extract(type: ArchiveType) {
    const ArchiveClass = Archive[type];
    const archive = new ArchiveClass(this.filename);

    await archive.extract();
  }
}
