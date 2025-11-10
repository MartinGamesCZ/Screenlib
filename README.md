# Screenlib

Screenlib is a TypeScript library designed for capturing screenshots of web pages using various browser engines. It provides a simple and efficient way to programmatically take screenshots for testing, documentation, thumbnails or other purposes.

## Features

- Support for multiple browser engines (See [Supported Browsers](#supported-browsers))
- Easy-to-use API for capturing screenshots
- Automatic browser download and management

## Supported Browsers

|         | Linux | Windows | macOS |         |
| ------- | ----- | ------- | ----- | ------- |
| Servo   | ✅    | ✅      | ❌    | Default |
| Chrome  | ❌    | ❌      | ❌    | WIP     |
| Firefox | ❌    | ❌      | ❌    | WIP     |
| WebKit  | ❌    | ❌      | ❌    | WIP     |

## Installation

You can install screenlib using your favorite package manager.

NPM:

```bash
npm install screenlib
```

Bun:

```bash
bun add screenlib
```

Yarn:

```bash
yarn add screenlib
```

## Usage

Capture URL:

```typescript
import { captureUrl } from "screenlib";

await captureUrl("https://npmjs.com/package/screenlib", {
  output: "screenshot.png",
});
```

Capture file:

```typescript
import { captureFile } from "screenlib";

await captureFile("path/to/file.html", {
  output: "screenshot.png",
});
```

Capture HTML string:

```typescript
import { captureHtml } from "screenlib";

await captureHtml("<html><body><h1>Hello, world!</h1></body></html>", {
  output: "screenshot.png",
});
```

Set dimensions:

```typescript
import { captureUrl } from "screenlib";

await captureUrl("https://npmjs.com/package/screenlib", {
  output: "screenshot.png",
  width: 1280,
  height: 720,
});
```

Set browser:

```typescript
import { captureUrl, Browser } from "screenlib";

await captureUrl("https://npmjs.com/package/screenlib", {
  output: "screenshot.png",
  browser: Browser.Servo,
});
```

## Authors

- Martin Petr
  - Github: [@MartinGamesCZ](https://github.com/MartinGamesCZ)
  - Website: [martinpetr.dev](https://martinpetr.dev)
