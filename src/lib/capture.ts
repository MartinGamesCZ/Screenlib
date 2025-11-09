import path from "path";
import type { CaptureOptions } from "../types/lib/capture";
import { Browser } from "../types/browser";
import { Browsers } from "../browser/_browser";

export function captureUrl(url: string, options: CaptureOptions) {
  return capture(url, options);
}
export function captureHtml(html: string, options: CaptureOptions) {
  return capture(`data:text/html,${encodeURIComponent(html)}`, options);
}
export function captureFile(filePath: string, options: CaptureOptions) {
  return capture(`file:///${path.resolve(filePath)}`, options);
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
