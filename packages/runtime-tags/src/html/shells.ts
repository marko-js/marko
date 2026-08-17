// Branch shell records (`id marker;walks;template`), quoted once here as
// frame chunks and shipped at most once per response for constructs.
export const shells: Record<string, string> = {};

export function _shells(registered: Record<string, string>) {
  for (const id in registered) {
    shells[id] =
      ",`" + registered[id].replace(/[\\`]|\$\{/g, (m) => "\\" + m) + "`";
  }
}
