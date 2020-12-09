import { types as t, NodePath } from "@marko/babel-types";
import { getTagDefForTagName, resolveRelativePath } from "@marko/babel-utils";

export function exit(path: NodePath<t.ImportDeclaration>) {
  const {
    node,
    hub: { file }
  } = path;
  const { source } = node;

  if (source.value[0] === "<") {
    const tagName = source.value.slice(1, -1);
    const tagDef = getTagDefForTagName(file, tagName);
    const tagEntry = tagDef && (tagDef.renderer || tagDef.template);
    const relativePath = tagEntry && resolveRelativePath(file, tagEntry);

    if (!relativePath) {
      throw path
        .get("source")
        .buildCodeFrameError(
          `Unable to find entry point for custom tag <${tagName}>.`
        );
    }

    source.value = relativePath;
  }
}
