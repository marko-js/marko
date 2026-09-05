// Shell records (`id marker;walks;template`): raw for the server's static
// renders, quoted once per response as frame chunks for constructs.
export const shellRecords: Record<string, string> = {};
export const shells: Record<string, string> = {};

export function _shells(registered: Record<string, string>) {
  for (const id in registered) {
    shellRecords[id] = registered[id];
    shells[id] =
      ",`" + registered[id].replace(/[\\`]|\$\{/g, (m) => "\\" + m) + "`";
  }
}
