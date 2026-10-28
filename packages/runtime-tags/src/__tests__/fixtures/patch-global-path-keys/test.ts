import type { TestConfig } from "../../main.test";

const g = (x: string, list: number[], ab: string, cd: string, p?: object) => ({
  $global: {
    o: { x, list, "a.b": ab },
    "c.d": cd,
    p,
    serializedGlobals: ["o", "c.d", "p"],
  },
});
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Paths through a method call, a length and dotted keys, an optional path whose
// object arrives in a patch, and a later member of one join changing alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    g("a", [1], "p", "q"),
    g("b", [1, 2], "r", "s", { x: "t" }),
    click,
    click,
    g("c", [3, 4], "u", "v", { x: "w" }),
    g("c", [3, 4, 5], "u", "v", { x: "w" }),
  ],
};
