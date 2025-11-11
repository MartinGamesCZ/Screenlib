import { Browser } from "../types/browser";
import { ServoBrowser } from "./servo";

export const Browsers = {
  [Browser.Servo]: ServoBrowser,
};
