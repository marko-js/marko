import getComponentFiles from "../../util/get-component-files";

const STYLE_REG = /^style(?:\.([^\s]+))?\s*\{/;
const STYLE_FOUND = new WeakSet();

export default function(path) {
  const { hub, node } = path;
  const { rawValue } = node;
  const matchedBlock = STYLE_REG.exec(rawValue);
  if (!matchedBlock) {
    return;
  }

  if (!path.parentPath.isProgram()) {
    throw path
      .get("name")
      .buildCodeFrameError(
        "Style blocks must be at the root of your Marko template."
      );
  }

  if (getComponentFiles(path).styleFile) {
    throw path
      .get("name")
      .buildCodeFrameError(
        'A Marko file can either have an inline style block, or an external "style.ext" file, but not both.'
      );
  }

  if (STYLE_FOUND.has(hub)) {
    throw path
      .get("name")
      .buildCodeFrameError(
        "A Marko file can only contain a single inline style block."
      );
  }

  const [startContent, type = "css"] = matchedBlock;
  const codeSartOffset = startContent.length;
  const codeEndOffset = rawValue.lastIndexOf("}");
  const code = rawValue.slice(codeSartOffset, codeEndOffset);
  node._styleType = type;
  node._styleCode = code;
  node._styleCodeStart = node.start + codeSartOffset;
  node._styleCodeEnd = node.start + codeEndOffset;
  path.get("attributes").forEach(attr => attr.remove());
  STYLE_FOUND.add(hub);
}
