// Shells (`id marker;walks;template`): raw for the server's static
// renders, quoted on first ship as flush list members to create from.
export const rawShells: Record<string, string> = {};
const quotedShells: Record<string, string> = {};

export function _shells(registered: Record<string, string>) {
  for (const id in registered) rawShells[id] = registered[id];
}

// Flushes ride one per line, so the markup's newlines escape too.
export function quotedShell(id: string) {
  return (quotedShells[id] ||=
    "`" +
    rawShells[id].replace(/[\\`\n\r]|\$\{/g, (m) =>
      m === "\n" ? "\\n" : m === "\r" ? "\\r" : "\\" + m,
    ) +
    "`");
}
