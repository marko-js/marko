import { basename } from "path";

export function exit(path) {
  const {
    hub: { file },
    node
  } = path;
  const { _styleType: type, _styleCode: code } = node;

  if (!type) {
    return;
  }

  const base = basename(file.opts.filename);
  file.metadata.marko.deps.push({
    type,
    code: code.trim(),
    path: `./${base}`,
    virtualPath: `./${base}.${type}`
  });

  path.remove();
}
