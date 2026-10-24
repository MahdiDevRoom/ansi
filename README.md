# ansi
ANSI escape codes for terminal styling
lightweight, typed, and dependency-free.

## Installation
Install directly from GitHub:

```bash
npm i github:mahdidevroom/ansi
```

> Requires Node.js 24+ (ESM) <br>
 The package is ESM-only (`"type": "module"`)

## Quick start

```ts
import { ANSI } from 'ansi';

console.log(`${ANSI.fg.green} Hello ${ANSI.reset}`);
```

Output: `Hello` printed in green.

## API overview

The package exports a single frozen object, `ANSI`. Every property is `readonly` and every string is a literal type — your editor shows the exact escape sequence on hover.

| Section  | Description                                                   |
|----------|---------------------------------------------------------------|
| Meta     | Package version string                                        |
| Reset    | Reset all styles (`\x1b[0m`)                                  |
| Effects  | Text effects (bold, italic, …)                                |
| Colors   | Foreground and background colors, plus `rgb` / `code` helpers |
| Cursor   | Relative / absolute movement, position save/restore           |
| Terminal | Bell, cursor visibility, and screen/line clearing             |
| Utils    | ANSI detection and stripping                                  |

## Effects (`ef`)

| Key | Sequence  | Description                                |
|-----|-----------|--------------------------------------------|
| `bold`          | `\x1b[1m` | Bold / increased intensity     |
| `dim`           | `\x1b[2m` | Dim / decreased intensity      |
| `italic`        | `\x1b[3m` | Italic                         |
| `underline`     | `\x1b[4m` | Underline                      |
| `blink`         | `\x1b[5m` | Slow blink                     |
| `inverse`       | `\x1b[7m` | Swap foreground and background |
| `hidden`        | `\x1b[8m` | Hidden text                    |
| `strikethrough` | `\x1b[9m` | Strikethrough                  |

```ts
console.log(`${ANSI.ef.bold}${ANSI.ef.underline} Important ${ANSI.reset}`);
```

## Colors (`fg` / `bg`)

Both `fg` and `bg` expose the same 16 named keys, plus `rgb` and `code` helpers. Only the escape prefix differs (`38` for foreground, `48` for background).

| Key             | `fg`       | `bg`        |
|-----------------|------------|-------------|
| `black`         | `\x1b[30m` | `\x1b[40m`  |
| `brightBlack`   | `\x1b[90m` | `\x1b[100m` |
| `red`           | `\x1b[31m` | `\x1b[41m`  |
| `brightRed`     | `\x1b[91m` | `\x1b[101m` |
| `green`         | `\x1b[32m` | `\x1b[42m`  |
| `brightGreen`   | `\x1b[92m` | `\x1b[102m` |
| `yellow`        | `\x1b[33m` | `\x1b[43m`  |
| `brightYellow`  | `\x1b[93m` | `\x1b[103m` |
| `blue`          | `\x1b[34m` | `\x1b[44m`  |
| `brightBlue`    | `\x1b[94m` | `\x1b[104m` |
| `magenta`       | `\x1b[35m` | `\x1b[45m`  |
| `brightMagenta` | `\x1b[95m` | `\x1b[105m` |
| `cyan`          | `\x1b[36m` | `\x1b[46m`  |
| `brightCyan`    | `\x1b[96m` | `\x1b[106m` |
| `white`         | `\x1b[37m` | `\x1b[47m`  |
| `brightWhite`   | `\x1b[97m` | `\x1b[107m` |

### 24-bit and 256-color helpers

| Helper | Parameters                                   | return   |
|--------|----------------------------------------------|----------|
| `rgb`  | `r: number` <br> `g: number` <br> `b: number`| `string` |
| `code` | `c: number`                                  | `string` |

```ts
console.log(`${ANSI.fg.rgb(255, 128, 0)} Orange ${ANSI.reset}`);
console.log(`${ANSI.fg.code(4)} Blue ${ANSI.reset}`);
```

## Cursor control

| Key                     | Parameters                   | Return   | Description                                          |
|-------------------------|------------------------------|----------|------------------------------------------------------|
| `up`                    | `n: number`                  | `string` | Move cursor up `n` lines (`\x1b[{n}A`)               |
| `down`                  | `n: number`                  | `string` | Move cursor down `n` lines (`\x1b[{n}B`)             |
| `right`                 | `n: number`                  | `string` | Move cursor right `n` columns (`\x1b[{n}C`)          |
| `left`                  | `n: number`                  | `string` | Move cursor left `n` columns (`\x1b[{n}D`)           |
| `cursorTo`              | `x: number` <br> `y: number` | `string` | Move cursor to column `x`, row `y` (`\x1b[{y};{x}H`) |
| `home`                  | ---                          | `string` | Move cursor to top-left (`\x1b[H`)                   |
| `saveCursorPosition`    | ---                          | `string` | Save cursor position (`\x1b[s`)                      |
| `restoreCursorPosition` | ---                          | `string` | Restore saved position (`\x1b[u`)                    |


```ts
process.stdout.write(ANSI.cursorTo(1, 1) + ANSI.clearScreen);
```

## Terminal control

### Bell and visibility

| Key    | Sequence    | Description     |
|--------|-------------|-----------------|
| `bell` | `\x07`      | Terminal bell   |
| `hide` | `\x1b[?25l` | Hide the cursor |
| `show` | `\x1b[?25h` | Show the cursor |

### Clearing

| Key               | Sequence  | Description                                                                        |
|-------------------|-----------|------------------------------------------------------------------------------------|
| `clear`           | `\x1Bc`   | Full terminal reset (RIS). Usually clears the screen; behavior varies by terminal. |
| `clearScreen`     | `\x1b[2J` | Clear the visible screen                                                           |
| `clearLine`       | `\x1b[2K` | Clear the entire current line                                                      |
| `clearToCursor`   | `\x1b[1J` | Clear from start of screen to cursor                                               |
| `clearFromCursor` | `\x1b[J`  | Clear from cursor to end of screen                                                 |
| `clearLineLeft`   | `\x1b[1K` | Clear from start of line to cursor                                                 |
| `clearLineRight`  | `\x1b[0K` | Clear from cursor to end of line                                                   |

> **Note:** `clear` uses the RIS sequence (`\x1Bc`). On most modern terminals it clears the screen, but behavior differs across terminals (some preserve scrollback). For a predictable “clear screen”, use `clearScreen` together with `home`.

---

## Utilities

| Key      | Parameters     | Return    | Description                                   |
|----------|----------------|-----------|-----------------------------------------------|
| `regexp` | ---            | `RegExp`  | Matches ANSI escape sequences                 |
| `strip`  | `text: string` | `string`  | Remove all ANSI sequences from a string       |
| `length` | `text: string` | `number`  | Visible length of a string (ANSI stripped)    |
| `isAnsi` | `text: string` | `boolean` | Whether the string contains any ANSI sequence |

```ts
const painted = `${ANSI.fg.red} Hello ${ANSI.reset}`;

ANSI.strip(painted);   // 'Hello'
ANSI.length(painted);  // 5
ANSI.isAnsi(painted);  // true
ANSI.isAnsi('Hello');  // false
```

> `strip` and `length` expect a `string`. Passing other types is a TypeScript error and will throw at runtime in plain JavaScript.

---

## TypeScript

The package ships with its own type definitions. No `@types/*` package is needed.

```ts
import { ANSI } from 'ansi';

// Literal types and readonly properties:
const reset: '\x1b[0m' = ANSI.reset;   // ✅
ANSI.reset = 'x';                      // ❌ readonly
```

If you need the shape of the exported object:

```ts
import { ANSI } from 'ansi';

type Ansi = typeof ANSI;
```

---

## Example: a tiny color helper

```ts
import { ANSI } from 'ansi';

const green = (s: string) => ANSI.fg.green + s + ANSI.reset;
const red = (s: string) => ANSI.fg.red + s + ANSI.reset;

console.log(green('OK'));
console.log(red('FAIL'));
```

---

## License

[MIT](./LICENSE) © MahdiDevRoom