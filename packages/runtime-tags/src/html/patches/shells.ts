// Shells (`id marker;walks;template`): raw for the server's static
// renders, quoted on first ship as flush list members to create from.
export const rawShells: Record<string, string> = {};
// How many ids `rawShells` holds, so a request never counts its keys.
export let shellCount = 0;
const quotedShells: Record<string, string> = {};
const quotedRefs: Record<string, string> = {};

// A module re-evaluated (a dev edit) re-registers under the same ids.
export function _shells(registered: Record<string, string>) {
  for (const id in registered) {
    if (rawShells[id] !== registered[id]) {
      if (rawShells[id] === undefined) shellCount++;
      rawShells[id] = registered[id];
      quotedShells[id] = quotedRefs[id] = "";
    }
  }
}

// A shell's setup ids (`[setup, scripts]`), led by those of each scope its
// markup composes, each id addressed by that scope's hop (`accessor>id`).
export function _shell_setup(
  own: ShellSetup,
  ...composed: [hop: string, setup: ShellSetup][]
): ShellSetup {
  const setup: ShellSetup = [[], []];
  for (const [hop, ids] of composed) {
    for (const side of [0, 1]) {
      for (const id of ids[side]) setup[side].push(hop + id);
    }
  }
  setup[0].push(...own[0]);
  setup[1].push(...own[1]);
  return setup;
}

// The setup marker a shell carries (` setup…!scripts…`) for the setup ids it
// composes as `_shell_setup` does, none for no ids.
export function _shell_marker(
  own: ShellSetup,
  ...composed: [hop: string, setup: ShellSetup][]
) {
  const [setup, scripts] = _shell_setup(own, ...composed);
  return setup.length || scripts.length
    ? " " + setup.join(" ") + (scripts.length ? "!" + scripts.join(" ") : "")
    : "";
}

type ShellSetup = [setup: string[], scripts: string[]];

// Flushes ride one per line, so the markup's newlines escape too.
// A reference names the shell's id and setup ids, not its markup.
export function quotedShell(id: string, ref?: boolean) {
  return ref
    ? (quotedRefs[id] ||= quoteShell(
        rawShells[id].slice(0, rawShells[id].search(/[;,]/)),
      ))
    : (quotedShells[id] ||= quoteShell(rawShells[id]));
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
