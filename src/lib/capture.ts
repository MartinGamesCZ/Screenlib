import path from "path";
import { exists } from "fs/promises";
import type { CaptureOptions } from "../types/lib/capture";
import { Browser } from "../types/browser";
import { Browsers } from "../browser/_browser";

export function captureUrl(url: string, options: CaptureOptions) {
  return capture(url, options);
}
export function captureHtml(html: string, options: CaptureOptions) {
  return capture(`data:text/html,${encodeURIComponent(html)}`, options);
}
export async function captureFile(filePath: string, options: CaptureOptions) {
  const fullPath = path.resolve(filePath);

  if (!(await exists(fullPath))) {
    throw new Error(`File not found: ${fullPath}`);
  }

  return await capture(`file:///${fullPath}`, options);
}

async function capture(url: string, options: CaptureOptions) {
  const BrowserClass = Browsers[options.browser ?? Browser.Servo];
  const browser = new BrowserClass({
    output: options.output,
    width: options.width,
    height: options.height,
  });

  await browser.setup();
  await browser.run(url);
}
