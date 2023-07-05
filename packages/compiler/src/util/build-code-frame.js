import path from "path";
import color from "kleur";
import { codeFrameColumns } from "@babel/code-frame";
const CWD = process.cwd();
const indent = "    ";

class CompileError extends Error {
  constructor(filename, code, loc, message) {
    super();
    const prettyMessage = buildMessage(code, loc, message);
    const prettyFileName = buildFileName(filename, loc);
    this.stack = loc
      ? `CompileError\n${indent}at ${prettyFileName}\n${prettyMessage.replace(
          /^/gm,
          indent
        )}`
      : `CompileError: ${prettyMessage}\n${indent}at ${prettyFileName}`;

    Object.defineProperties(this, {
      loc: {
        value: loc,
        enumerable: false,
        writable: true,
        configurable: true
      },
      label: {
        value: message,
        enumerable: false,
        writable: true,
        configurable: true
      },
      // Ignore some mutations from Babel.
      code: {
        enumerable: false,
        configurable: true,
        get() {
          return undefined;
        },
        set() {}
      },
      message: {
        configurable: true,
        enumerable: false,
        get() {
          return `${prettyFileName}: ${message}`;
        },
        set() {}
      }
    });
  }
}

export function buildCodeFrameError(filename, code, loc, message) {
  return new CompileError(filename, code, loc, message);
}

function buildMessage(code, loc, message) {
  return loc
    ? codeFrameColumns(
        code,
        {
          start: {
            line: loc.start.line,
            column: loc.start.column + 1
          },
          end:
            loc.end && loc.start.line === loc.end.line
              ? {
                  line: loc.end.line,
                  column: loc.end.column + 1
                }
              : undefined
        },
        { highlightCode: true, message }
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
