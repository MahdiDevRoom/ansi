/**
 * @name Ansi
 * @version 1.0.0
 * @author MahdiDevRoom
 * @license MIT
 * @see https://github.com/mahdidevroom/ansi
 */

export const ANSI = {
  // Version
  version: '1.0.0',

  // Reset
  reset: '\x1b[0m',

  // Effect
  ef: {
    bold:   '\x1b[1m', dim:           '\x1b[2m',
    italic: '\x1b[3m', underline:     '\x1b[4m',
    blink:  '\x1b[5m', inverse:       '\x1b[7m',
    hidden: '\x1b[8m', strikethrough: '\x1b[9m',
  },

  // Foreground Colors
  fg: {
    black:   '\x1b[30m', brightBlack:   '\x1b[90m',
    red:     '\x1b[31m', brightRed:     '\x1b[91m',
    green:   '\x1b[32m', brightGreen:   '\x1b[92m',
    yellow:  '\x1b[33m', brightYellow:  '\x1b[93m',
    blue:    '\x1b[34m', brightBlue:    '\x1b[94m',
    magenta: '\x1b[35m', brightMagenta: '\x1b[95m',
    cyan:    '\x1b[36m', brightCyan:    '\x1b[96m',
    white:   '\x1b[37m', brightWhite:   '\x1b[97m',

    rgb: (r: number, g: number, b: number) => `\x1b[38;2;${r};${g};${b}m`,
    code: (c: number) => `\x1b[38;5;${c}m`,
  },

  // Background Colors
  bg: {
    black:   '\x1b[40m', brightBlack:   '\x1b[100m',
    red:     '\x1b[41m', brightRed:     '\x1b[101m',
    green:   '\x1b[42m', brightGreen:   '\x1b[102m',
    yellow:  '\x1b[43m', brightYellow:  '\x1b[103m',
    blue:    '\x1b[44m', brightBlue:    '\x1b[104m',
    magenta: '\x1b[45m', brightMagenta: '\x1b[105m',
    cyan:    '\x1b[46m', brightCyan:    '\x1b[106m',
    white:   '\x1b[47m', brightWhite:   '\x1b[107m',

    rgb: (r: number, g: number, b: number) => `\x1b[48;2;${r};${g};${b}m`,
    code: (c: number) => `\x1b[48;5;${c}m`,
  },

  // Cursor
  up:       (n: number): string => `\x1b[${n}A`,
  down:     (n: number): string => `\x1b[${n}B`,
  right:    (n: number): string => `\x1b[${n}C`,
  left:     (n: number): string => `\x1b[${n}D`,
  cursorTo: (x: number, y: number): string => `\x1b[${y};${x}H`,

  home: '\x1b[H',
  saveCursorPosition: '\x1b[s',
  restoreCursorPosition: '\x1b[u',

  // Bell
  bell: '\x07',

  // Visibility
  hide: '\x1b[?25l',
  show: '\x1b[?25h',

  // Clear
  clear:           '\x1Bc',
  clearScreen:     '\x1b[2J',
  clearLine:       '\x1b[2K',
  clearToCursor:   '\x1b[1J',
  clearLineLeft:   '\x1b[1K',
  clearFromCursor: '\x1b[J',
  clearLineRight:  '\x1b[0K',

  // Utils
  regexp: new RegExp(
    [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
    ].join('|')
  ),
  strip:   (text: string): string  => text.replace(ANSI.regexp, ''),
  length:  (text: string): number  => ANSI.strip(text).length,
  isAnsi:  (text: string): boolean => ANSI.regexp.test(text),
} as const;