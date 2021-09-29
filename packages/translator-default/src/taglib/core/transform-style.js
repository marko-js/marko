import path from "path";
import getComponentFiles from "../../util/get-component-files";

const STYLE_REG = /^style(?:\.([^\s]+))?\s*\{/;

export default function (tag) {
  const { hub, node } = tag;
  const { deps } = hub.file.metadata.marko;
  const { rawValue } = node;
  const matchedBlock = STYLE_REG.exec(rawValue);
  if (!matchedBlock) {
    return;
  }

  if (!tag.parentPath.isProgram()) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "Style blocks must be at the root of your Marko template."
      );
  }

  if (deps.some(dep => dep.style)) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        "A Marko file can only contain a single inline style block."
      );
  }

  if (getComponentFiles(tag).styleFile) {
    throw tag
      .get("name")
      .buildCodeFrameError(
        'A Marko file can either have an inline style block, or an external "style.ext" file, but not both.'
      );
  }

  const [startContent, type = "css"] = matchedBlock;
  const codeSartOffset = startContent.length;
  const codeEndOffset = rawValue.lastIndexOf("}");
  const code = rawValue.slice(codeSartOffset, codeEndOffset);
  const base = path.basename(hub.file.opts.filename);
  const start = node.extra && node.extra.nameStart;

  deps.push({
    type,
    code,
    style: true,
    startPos: start + codeSartOffset,
    endPos: start + codeEndOffset,
    path: `./${base}`,
    virtualPath: `./${base}.${type}`
  });

  tag.remove();
}
