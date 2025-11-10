import { ArchiveType } from "../types/archive";
import { Browser } from "../types/browser";
import { Platform } from "../types/platform";

export const BROWSER_EXEC_CONFIG: {
  [key in Browser]: {
    [platform in Platform]: {
      path: string;
    };
  };
} = {
  [Browser.Servo]: {
    [Platform.Linux]: {
      path: "servo/servo",
    },
    [Platform.Windows]: {
      path: "servo-x86_64-windows-msvc.exe",
    },
  },
} as const;
