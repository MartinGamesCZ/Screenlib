import type { Browser } from "../browser";

export type CaptureRequiredOptions = {
  output: string;
};

export type CaptureOptionalOptions = {
  width: number;
  height: number;
  browser: Browser;
};

export type CaptureOptions = CaptureRequiredOptions &
  Partial<CaptureOptionalOptions>;
