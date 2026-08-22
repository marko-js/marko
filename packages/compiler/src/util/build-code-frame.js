import path from "path";

import { codeFrameColumns } from "@marko/compiler/internal/babel";
import { cwd } from "@marko/compiler/modules";
// Imported by name: a default import compiles to a `__toESM(mod, 1)` wrapper
// that double-wraps once a bundler resolves kleur through its ESM entry.
import { cyan, yellow } from "kleur/colors";

import { stripAnsi } from "./strip-ansi";
const indent = "    ";

class CompileError extends Error {
  constructor(filename, code, loc, label) {
    const prettyMessage = buildMessage(code, loc, label);
    const prettyFileName = buildFileName(filename, loc);
    const message = loc
      ? `\n${indent}at ${prettyFileName}\n${prettyMessage.replace(
          /^/gm,
          indent,
        )}`
      : `${prettyMessage}\n${indent}at ${prettyFileName}`;
    const { stackTraceLimit } = Error;
    Error.stackTraceLimit = loc ? 0 : 3;
    super(message);
    Error.captureStackTrace?.(this, buildCodeFrameError);
    this.name = "CompileError";
    Error.stackTraceLimit = stackTraceLimit;
    // Flat position fields so bundlers that read `{ file, line, column }`
    // (rollup/vite) print the location instead of `undefined:undefined`.
    Object.defineProperties(this, {
      file: {
        value: filename,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      line: {
        value: loc?.start.line,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      column: {
        value: loc?.start.column,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      loc: {
        // Flat fields first so bundlers reading `{ file, line, column }`
        // print the position; Babel's `start`/`end` stay for existing readers.
        value: loc && {
          file: filename,
          line: loc.start.line,
          column: loc.start.column,
          start: loc.start,
          end: loc.end,
        },
        enumerable: false,
        writable: true,
        configurable: true,
      },
      label: {
        value: label,
        enumerable: false,
        writable: true,
        configurable: true,
      },
      // Ignore some mutations from Babel.
      code: {
        enumerable: false,
        configurable: true,
        get: noop,
        set: noop,
      },
      message: {
        enumerable: true,
        configurable: true,
        get() {
          return message;
        },
        set() {
          Object.defineProperty(this, "message", {
            value: message,
            enumerable: true,
            writable: true,
            configurable: true,
          });
        },
      },
    });
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return `${this.name}: ${stripAnsi(this.message)}`;
  }
}

export function buildCodeFrameError(filename, code, loc, label) {
  return new CompileError(filename, code, loc, label);
}

// Deliberately does not window the framed line: the full line is shown as-is.
function buildMessage(code, loc, message) {
  return loc
    ? codeFrameColumns(
        code,
        {
          start: {
            line: loc.start.line,
            column: loc.start.column + 1,
          },
          end:
            loc.end && loc.start.line === loc.end.line
              ? {
                  line: loc.end.line,
                  column: loc.end.column + 1,
                }
              : undefined,
        },
        { highlightCode: true, message },
      )
    : message;
}

function buildFileName(filename, loc) {
  return `${cyan(path.relative(cwd, filename))}${
    loc ? `:${yellow(loc.start.line)}:${yellow(loc.start.column + 1)}` : ""
  }`;
}

function noop() {}
