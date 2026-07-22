/** A composed segment: a literal, or a child template id whose registered
 * shell splices in (statically inlined children compose this way). */
export type ShellPart = string | [childTemplateId: string];
export type ShellSource = string | ShellPart[];

/** Server-side shells: per patch-participating section, the
 * values-free `[template, walks]` a patch ships for client construction.
 * Composed sources resolve lazily so registration order never matters. */
export const serverRenderers: Record<
  string,
  [template: ShellSource, walks: ShellSource]
> = {};

export function _renderer_shells(shells: typeof serverRenderers) {
  Object.assign(serverRenderers, shells);
  // Registration replaces sources (rebuilds re-evaluate template modules), so
  // every memoized composition is suspect, not just the re-registered ids.
  for (const id in resolved) delete resolved[id];
}

export function hasServerRenderer(id: string) {
  return resolveServerRenderer(id) !== undefined;
}

const resolved: Record<string, [string, string] | 0> = {};
export function resolveServerRenderer(
  id: string,
): [template: string, walks: string] | undefined {
  const cached = resolved[id];
  if (cached !== undefined) return cached || undefined;
  const source = serverRenderers[id];
  // An unregistered id is not cached: its module may load later.
  if (!source) return;
  // Break cycles (self-recursive templates) while this id resolves; only a
  // completed resolution is memoized, so a child that loads later can succeed.
  resolved[id] = 0;
  try {
    const template = resolveShellSource(source[0], 0);
    if (template === undefined) return;
    const walks = resolveShellSource(source[1], 1);
    if (walks === undefined) return;
    return (resolved[id] = [template, walks]);
  } finally {
    if (!resolved[id]) delete resolved[id];
  }
}

function resolveShellSource(
  source: ShellSource,
  index: 0 | 1,
): string | undefined {
  if (typeof source === "string") return source;
  let result = "";
  for (const part of source) {
    if (typeof part === "string") {
      result += part;
    } else {
      const child = resolveServerRenderer(part[0]);
      if (!child) return;
      result += child[index];
    }
  }
  return result;
}
