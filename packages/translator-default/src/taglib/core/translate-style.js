import { basename } from "path";

export function exit(path) {
  const { hub, node } = path;
  const { _styleType: type, _styleCode: code } = node;

  if (!type) {
    return;
  }

  const base = basename(hub.filename);
  hub.meta.deps.push({
    type,
    code: code.trim(),
    path: `./${base}`,
    virtualPath: `./${base}.${type}`
  });

  path.remove();
}
