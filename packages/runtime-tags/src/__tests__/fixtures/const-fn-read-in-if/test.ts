import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// patch-const-fn-read-in-if without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ a: "A", x: true }, inc, { a: "B", x: false }, { a: "C", x: true }],
};
