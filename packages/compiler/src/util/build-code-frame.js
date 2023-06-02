import path from "path";
import { codeFrameColumns } from "@babel/code-frame";
const CWD = process.cwd();

export function buildCodeFrame(filename, code, loc, message) {
  return `${path.relative(CWD, filename)}${
    loc ? `(${loc.start.line},${loc.start.column + 1})` : ""
  }: ${message}\n${
    loc
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
          { highlightCode: true }
        )
      : ""
  }`;
}

export function buildCodeFrameError(
  filename,
  code,
  loc,
  message,
  Error = SyntaxError
) {
  const err = new Error();
  const codeFrame = buildCodeFrame(filename, code, loc, message);

  // Avoid showing the stack trace for this error.
  err.stack = "";

  // Prevent babel from changing our error message.
  Object.defineProperty(err, "message", {
    get() {
      return codeFrame;
    },
    set() {}
  });

  return err;
}
