import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A dual-purpose child's structural param left unfed (or fed a constant)
// can never change, so only its fed params gate the call site.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: "1", b: "2" },
    click,
    { a: "3", b: "4" },
    click,
    { a: "5", b: "6" },
    click,
  ],
};
