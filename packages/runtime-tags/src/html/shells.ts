// Shells (`id marker;walks;template`): raw for the server's static
// renders, quoted once per response as flush list members for constructs.
export const rawShells: Record<string, string> = {};
export const shells: Record<string, string> = {};

export function _shells(registered: Record<string, string>) {
  for (const id in registered) {
    rawShells[id] = registered[id];
    // Frames ride one per line, so the markup's newlines escape too.
    shells[id] =
      "`" +
      registered[id].replace(/[\\`\n\r]|\$\{/g, (m) =>
        m === "\n" ? "\\n" : m === "\r" ? "\\r" : "\\" + m,
      ) +
      "`";
  }
}
