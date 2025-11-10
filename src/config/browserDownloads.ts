import { ArchiveType } from "../types/archive";
import { Browser } from "../types/browser";
import { Platform } from "../types/platform";

export const BROWSER_DOWNLOADS_CONFIG: {
  [key in Browser]: {
    [platform in Platform]: {
      url: string;
      extractor: ArchiveType | null;
    };
  };
} = {
  [Browser.Servo]: {
    [Platform.Linux]: {
      url: "https://github.com/servo/servo/releases/download/v0.0.1/servo-x86_64-linux-gnu.tar.gz",
      extractor: ArchiveType.Tar,
    },
    [Platform.Windows]: {
      url: "https://github.com/servo/servo/releases/download/v0.0.1/servo-x86_64-windows-msvc.exe",
      extractor: null,
    },
  },
} as const;
