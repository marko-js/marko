import type { TestConfig } from "../../main.test";

const items = (n: number, s: string) =>
  Array.from({ length: n }, (_, id) => ({ id, name: `N${id}${s}` }));

// A loop row passes its child a handler literal, fixed for the row's life: a
// row the patch creates seeds it, and a paired row takes no bind or re-run.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: items(1, "a") },
    { items: items(2, "b") },
    (document: Document) =>
      document.querySelectorAll<HTMLButtonElement>("button")[1].click(),
  ],
};
