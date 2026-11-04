import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// patch-const-fn-read-in-bodies without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { a: "A", x: true, items: [1, 2], value: Promise.resolve("v") },
    inc,
    { a: "B", x: true, items: [3], value: Promise.resolve("w") },
  ],
};
