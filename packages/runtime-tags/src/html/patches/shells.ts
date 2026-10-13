// Shells (`id marker;walks;template`): raw for the server's static
// renders, quoted on first ship as flush list members to create from.
export const rawShells: Record<string, string> = {};
// How many ids `rawShells` holds, so a request never counts its keys.
export let shellCount = 0;
const quotedShells: Record<string, string> = {};

// A module re-evaluated (a dev edit) re-registers under the same ids.
export function _shells(registered: Record<string, string>) {
  for (const id in registered) {
    if (rawShells[id] !== registered[id]) {
      if (rawShells[id] === undefined) shellCount++;
      rawShells[id] = registered[id];
      quotedShells[id] = "";
    }
  }
}

// Flushes ride one per line, so the markup's newlines escape too.
export function quotedShell(id: string) {
  return (quotedShells[id] ||= quoteShell(rawShells[id]));
}

const unsafeShellReg = /[`\\\n\r]|\$\{/g;
const replaceUnsafeShell = (c: string) =>
  c === "\n" ? "\\n" : c === "\r" ? "\\r" : "\\" + c;
const quoteShell = (str: string) =>
  "`" +
  (unsafeShellReg.test(str)
    ? str.replace(unsafeShellReg, replaceUnsafeShell)
    : str) +
  "`";
