import path from "path";
import color from "kleur";
import { codeFrameColumns } from "@babel/code-frame";
const CWD = process.cwd();

export function buildCodeFrameError(
  filename,
  code,
  loc,
  message,
  Error = SyntaxError
) {
  const err = new Error();
  const codeFrame = buildCodeFrame(filename, code, loc, message);

  err.loc = loc;
  err.label = message;
  err.stack = ""; // Avoid showing the stack trace for this error.

  // Prevent babel from changing our error message.
  Object.defineProperty(err, "message", {
    get() {
      return codeFrame;
    },
    set() {}
  });

  return err;
}

function buildCodeFrame(filename, code, loc, message) {
  return `${color.cyan(path.relative(CWD, filename))}${
    loc
      ? `:${color.yellow(loc.start.line)}:${color.yellow(
          loc.start.column + 1
        )}\n\n${codeFrameColumns(
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
        )}`
      : `: ${message}`
  }`;
}
