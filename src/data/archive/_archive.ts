import { ArchiveType } from "../../types/archive";
import { TarArchive } from "./tar";

export const Archive = {
  [ArchiveType.Tar]: TarArchive,
};
