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
    const frame = codeFrameColumns(
      this.code,
      loc && {
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

    const position = loc ? `(${loc.start.line},${loc.start.column + 1})` : "";
    return new Error(
      `${path.relative(
        CWD,
        this.opts.sourceFileName
      )}${position}: ${msg}\n${frame}`
    );
  }
}
