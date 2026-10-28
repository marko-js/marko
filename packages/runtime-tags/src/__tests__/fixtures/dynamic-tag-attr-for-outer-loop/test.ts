import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// patch-dynamic-tag-attr-for-outer-loop without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { on: true, as: ["x"], bs: [1, 2], note: "n" },
    inc,
    { on: true, as: ["x", "y"], bs: [1], note: "m" },
    { on: false, as: ["y"], bs: [2], note: "o" },
    { on: true, as: ["z"], bs: [3], note: "p" },
  ],
};
