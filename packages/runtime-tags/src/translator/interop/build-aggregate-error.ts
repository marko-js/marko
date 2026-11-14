import path from "path";

import type { types as t } from "@marko/compiler";
import { codeFrameColumns } from "@marko/compiler/internal/babel";
import * as markoModules from "@marko/compiler/modules";

export function buildAggregateError(
  file: t.BabelFile,
  rootMsg: string,
  ...features: [string, t.Node][]
) {
  const err = new SyntaxError();
  const fileName = path.relative(
    markoModules.cwd,
    file.opts.filename as string,
  );
  const finalMsg = `${rootMsg}:\n\n${features
    .map(
      ([msg, node]) =>
        `\x1b[90m${msg} at ${getFileNameWithLoc(
          fileName,
          node,
        )}:\x1b[0m\n${getFrame(file, node)}`,
    )
    .join("\n\n")}`;

  if (!("MARKO_DEBUG" in process.env)) {
    err.stack = finalMsg;
  }

  // Prevent babel from changing our error message.
  Object.defineProperty(err, "message", {
    get() {
      return finalMsg;
    },
    set() {},
  });

  return err;
}

function getFrame(file: t.BabelFile, { loc }: t.Node) {
  return loc
    ? codeFrameColumns(
        file.code,
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
        { highlightCode: true },
      )
    : "";
}

function getFileNameWithLoc(fileName: string, { loc }: t.Node) {
  if (loc) {
    return `${fileName}(${loc.start.line},${loc.start.column + 1})`;
  }

  return fileName;
}
