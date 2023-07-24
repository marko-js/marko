import type { types } from "@marko/compiler";
import { loadFileForTag } from "@marko/babel-utils";

export default (helloTag: types.NodePath<types.MarkoTag>, t: typeof types) => {
  const messageTag = (helloTag as any).getNextSibling();
  helloTag.insertAfter(
    t.markoText(`${readFileText(helloTag)} ${readFileText(messageTag)}`)
  );
  helloTag.remove();
  messageTag.remove();
};

function readFileText(tag: types.NodePath<types.MarkoTag>) {
  const file = loadFileForTag(tag)!;
  return (file.path.get("body")[0] as types.NodePath<types.MarkoText>).node
    .value;
}
