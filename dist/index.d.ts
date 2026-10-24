/**
 * @name Ansi
 * @version 1.0.0
 * @author MahdiDevRoom
 * @license MIT
 * @see https://github.com/mahdidevroom/ansi
 */
export declare const ANSI: {
    readonly version: "1.0.0";
    readonly reset: "\u001B[0m";
    readonly ef: {
        readonly bold: "\u001B[1m";
        readonly dim: "\u001B[2m";
        readonly italic: "\u001B[3m";
        readonly underline: "\u001B[4m";
        readonly blink: "\u001B[5m";
        readonly inverse: "\u001B[7m";
        readonly hidden: "\u001B[8m";
        readonly strikethrough: "\u001B[9m";
    };
    readonly fg: {
        readonly black: "\u001B[30m";
        readonly brightBlack: "\u001B[90m";
        readonly red: "\u001B[31m";
        readonly brightRed: "\u001B[91m";
        readonly green: "\u001B[32m";
        readonly brightGreen: "\u001B[92m";
        readonly yellow: "\u001B[33m";
        readonly brightYellow: "\u001B[93m";
        readonly blue: "\u001B[34m";
        readonly brightBlue: "\u001B[94m";
        readonly magenta: "\u001B[35m";
        readonly brightMagenta: "\u001B[95m";
        readonly cyan: "\u001B[36m";
        readonly brightCyan: "\u001B[96m";
        readonly white: "\u001B[37m";
        readonly brightWhite: "\u001B[97m";
        readonly rgb: (r: number, g: number, b: number) => string;
        readonly code: (c: number) => string;
    };
    readonly bg: {
        readonly black: "\u001B[40m";
        readonly brightBlack: "\u001B[100m";
        readonly red: "\u001B[41m";
        readonly brightRed: "\u001B[101m";
        readonly green: "\u001B[42m";
        readonly brightGreen: "\u001B[102m";
        readonly yellow: "\u001B[43m";
        readonly brightYellow: "\u001B[103m";
        readonly blue: "\u001B[44m";
        readonly brightBlue: "\u001B[104m";
        readonly magenta: "\u001B[45m";
        readonly brightMagenta: "\u001B[105m";
        readonly cyan: "\u001B[46m";
        readonly brightCyan: "\u001B[106m";
        readonly white: "\u001B[47m";
        readonly brightWhite: "\u001B[107m";
        readonly rgb: (r: number, g: number, b: number) => string;
        readonly code: (c: number) => string;
    };
    readonly up: (n: number) => string;
    readonly down: (n: number) => string;
    readonly right: (n: number) => string;
    readonly left: (n: number) => string;
    readonly cursorTo: (x: number, y: number) => string;
    readonly home: "\u001B[H";
    readonly saveCursorPosition: "\u001B[s";
    readonly restoreCursorPosition: "\u001B[u";
    readonly bell: "\u0007";
    readonly hide: "\u001B[?25l";
    readonly show: "\u001B[?25h";
    readonly clear: "\u001Bc";
    readonly clearScreen: "\u001B[2J";
    readonly clearLine: "\u001B[2K";
    readonly clearToCursor: "\u001B[1J";
    readonly clearLineLeft: "\u001B[1K";
    readonly clearFromCursor: "\u001B[J";
    readonly clearLineRight: "\u001B[0K";
    readonly regexp: RegExp;
    readonly strip: (text: string) => string;
    readonly length: (text: string) => number;
    readonly isAnsi: (text: string) => boolean;
};
