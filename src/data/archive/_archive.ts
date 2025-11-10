import { ArchiveType } from "../../types/archive";
import { TarArchive } from "./tar";
import { ZipArchive } from "./zip";

export const Archive = {
  [ArchiveType.Tar]: TarArchive,
  [ArchiveType.Zip]: ZipArchive,
};
