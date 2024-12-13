import { types as t } from "@marko/compiler";
import {
  assertNoAttributes,
  assertNoParams,
} from "@marko/compiler/babel-utils";
import path from "path";

export function enter(tag) {
  const {
    hub: { file },
  } = tag;
  assertNoParams(tag);
  assertNoAttributes(tag);

  const fs = file.markoOpts.fileSystem;
  const tagName = tag.get("name").node.value;
  const tagExample = `<${tagName}("./path-to-file.ext")>`;
  const args = tag.get("arguments");

  if (args.length !== 1) {
    throw tag.buildCodeFrameError(
      `A single path argument is required for ${tagExample}.`,
    );
  }

  const [content] = args;

  if (!content.isStringLiteral()) {
    throw content.buildCodeFrameError(
      `The argument to ${tagExample} must be a static string.`,
    );
  }

  const dir = path.dirname(file.opts.filename);
  const fullPath = path.resolve(dir, content.node.value);

  try {
    const stat = fs.statSync(fullPath);

    if (!stat.isFile()) {
      throw new Error();
    }
  } catch {
    throw content.buildCodeFrameError(`Unable to find file for <${tagName}>.`);
  }

  tag.replaceWith(
    t.markoPlaceholder(
      t.stringLiteral(fs.readFileSync(fullPath).toString("utf-8")),
      tagName === "include-text",
    ),
  );
}
