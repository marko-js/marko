import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// patch-tag-join-shared-member without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "a", c: "c", d: "d" },
    { a: "A", c: "c", d: "d" },
    click,
    { a: "A", c: "C", d: "D" },
    click,
  ],
};
