import { Platform } from "../types/platform";

export class PlatformManager {
  constructor() {}

  static get(): Platform {
    switch (process.platform) {
      case "win32":
        return Platform.Windows;
      case "darwin":
        throw new Error("MacOS is not supported yet.");
      case "linux":
        return Platform.Linux;
      default:
        throw new Error(`Unsupported platform: ${process.platform}`);
    }
  }
}
