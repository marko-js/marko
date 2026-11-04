import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".toggle"))
    b.click();
};

// The second call's keepers report its own body, then the first call's: the
// gate at its end still sees its own body kept.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, a: "a1", b: "b1" },
    { on: true, a: "a2", b: "b2" },
    toggle,
    toggle,
  ],
};
