import path from "path";
import { File } from "@babel/core";
import { codeFrameColumns } from "@babel/code-frame";
const CWD = process.cwd();

export class MarkoFile extends File {
  addHelper() {
    throw new Error("addHelper is not supported during a Marko transform");
  }

  buildCodeFrameError(node, msg, Error = SyntaxError) {
    const { loc } = node;
    const frame =
      loc &&
      codeFrameColumns(
        this.code,
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
      );

    const finalMsg = `${path.relative(CWD, this.opts.sourceFileName)}${
      loc ? `(${loc.start.line},${loc.start.column + 1})` : ""
    }: ${msg}\n${frame || ""}`;

    const err = new Error();
    err.loc = loc;

    // Prevent babel from changing our error message.
    Object.defineProperty(err, "message", {
      get() {
        return finalMsg;
      },
      set() {}
    });
    return err;
  }
}
