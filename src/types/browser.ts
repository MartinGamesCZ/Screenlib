export enum Browser {
  Servo = "servo",
}

export type BrowserRequiredConfig = {
  output: string;
};

export type BrowserOptionalConfig = {
  width: number;
  height: number;
};

export type BrowserConfig = BrowserRequiredConfig &
  Partial<BrowserOptionalConfig>;
