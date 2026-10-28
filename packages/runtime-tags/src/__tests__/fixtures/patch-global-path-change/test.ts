import type { TestConfig } from "../../main.test";

const g = (x: string, y: number, k: string) => ({
  $global: { o: { x, y }, k, serializedGlobals: ["o", "k"] },
});
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Reads of `o.x`, resumed and in a branch the client creates, follow a change
// to `o.x`, and a script reading `o.x` and the key `k` follows either.
export const config: TestConfig = {
  patches: true,
  steps: [
    g("a", 1, "k"),
    g("b", 1, "k"),
    g("b", 1, "l"),
    click,
    click,
    g("c", 1, "l"),
    g("c", 2, "l"),
  ],
};
