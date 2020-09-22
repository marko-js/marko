import { basename } from "path";

export function exit(path) {
  const {
    hub: { file },
    node
  } = path;
  const { _styleType: type } = node;

  if (!type) {
    return;
  }

  const base = basename(file.opts.sourceFileName);
  file.metadata.marko.deps.push({
    type,
    code: node._styleCode,
    startPos: node._styleCodeStart,
    endPos: node._styleCodeEnd,
    path: `./${base}`,
    virtualPath: `./${base}.${type}`
  });

  path.remove();
}
