import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// An attribute tag `<for>`'s rows, handed to a dynamic tag inside an outer loop,
// carry their local values: a row the patch adds renders from its shell's factory.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, as: ["x"], bs: [1, 2], note: "n" },
    inc,
    { on: true, as: ["x", "y"], bs: [1], note: "m" },
    { on: false, as: ["y"], bs: [2], note: "o" },
    { on: true, as: ["z"], bs: [3], note: "p" },
  ],
};
