import nodePath from "path";
import { types as t } from "@marko/compiler";
import { assertNoParams, assertNoAttributes } from "@marko/babel-utils";

export function enter(path) {
  const {
    hub: { file }
  } = path;
  assertNoParams(path);
  assertNoAttributes(path);

  const fs = file.markoOpts.fileSystem;
  const tagName = path.get("name").node.value;
  const tagExample = `<${tagName}("./path-to-file.ext")>`;
  const args = path.get("arguments");

  if (args.length !== 1) {
    throw path.buildCodeFrameError(
      `A single path argument is required for ${tagExample}.`
    );
  }

  const [content] = args;

  if (!content.isStringLiteral()) {
    throw content.buildCodeFrameError(
      `The argument to ${tagExample} must be a static string.`
    );
  }

  const dir = nodePath.dirname(file.opts.sourceFileName);
  const fullPath = nodePath.resolve(dir, content.node.value);

  try {
    const stat = fs.statSync(fullPath);

    if (!stat.isFile()) {
      throw new Error();
    }
  } catch {
    throw content.buildCodeFrameError(`Unable to find file for <${tagName}>.`);
  }

  path.replaceWith(
    t.markoPlaceholder(
      t.stringLiteral(fs.readFileSync(fullPath).toString("utf-8")),
      tagName === "include-text"
    )
  );
}
