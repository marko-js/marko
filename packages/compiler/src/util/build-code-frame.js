import path from "path";
import { codeFrameColumns } from "@babel/code-frame";
import color from "kleur";
import { stripAnsi } from "./strip-ansi";
const CWD = process.cwd();
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
    Error.stackTraceLimit = 0;
    super(message);
    this.name = "CompileError";
    Error.stackTraceLimit = stackTraceLimit;
    Object.defineProperties(this, {
      loc: {
        value: loc,
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
  return `${color.cyan(path.relative(CWD, filename))}${
    loc
      ? `:${color.yellow(loc.start.line)}:${color.yellow(loc.start.column + 1)}`
      : ""
  }`;
}

function noop() {}
