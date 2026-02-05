import type { types as t } from "@marko/compiler";
import { codeFrameColumns } from "@marko/compiler/internal/babel";
import * as markoModules from "@marko/compiler/modules";
import path from "path";

export function buildAggregateError(
  file: t.BabelFile,
  rootMsg: string,
  ...paths: [string, t.NodePath][]
) {
  const err = new SyntaxError();
  const fileName = path.relative(
    markoModules.cwd,
    file.opts.filename as string,
  );
  const finalMsg = `${rootMsg}:\n\n${paths
    .map(
      ([msg, path]: [string, t.NodePath]) =>
        `\u001b[90m${msg} at ${getFileNameWithLoc(
          fileName,
          path,
        )}:\x1b[0m\n${getFrame(file, path)}`,
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

function getFrame(file: t.BabelFile, { node: { loc } }: t.NodePath) {
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

function getFileNameWithLoc(fileName: string, { node: { loc } }: t.NodePath) {
  if (loc) {
    return `${fileName}(${loc.start.line},${loc.start.column + 1})`;
  }

  return fileName;
}
