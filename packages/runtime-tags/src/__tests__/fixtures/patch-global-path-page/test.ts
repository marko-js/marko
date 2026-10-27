import type { TestConfig } from "../../main.test";

const g = (cspNonce: string, x: string, y: number, a: string, c: string) => ({
  $global: { cspNonce, o: { x, y }, a, c, serializedGlobals: ["o", "a", "c"] },
});

// Beside nested readers: two-key joins, loop rows and a script re-run on either key;
// the nonce (no patch ships it) moves no reader; a whole reader re-runs.
export const config: TestConfig = {
  patches: true,
  // The page keeps its document's nonce, which a fresh render of the patch's lacks.
  skip_fresh_render: true,
  same_input_divergence:
    "Each patch ships `$global.o` as a new object, and values compare by identity, so the whole reader re-runs.",
  steps: [
    g("doc", "a", 1, "a1", "c1"),
    g("patch", "a", 2, "a1", "c1"),
    g("patch", "b", 2, "a1", "c1"),
    g("patch", "b", 2, "a1", "c2"),
    g("patch", "b", 2, "a2", "c2"),
  ],
};
