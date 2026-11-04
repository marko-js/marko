import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
};

// patch-const-fn-read-in-if's capture, read under a loop (and a row local's), an
// `<await>` and a `<define>` body's branch (whose own param it captures).
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { a: "A", x: true, items: [1, 2], value: Promise.resolve("v") },
    inc,
    { a: "B", x: true, items: [3], value: Promise.resolve("w") },
  ],
};
