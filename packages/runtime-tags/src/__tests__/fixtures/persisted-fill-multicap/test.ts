import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server-bound arrow capturing TWO input props: both capture slots get
// patch writes, so the re-bound function reads a coherent pair.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { a: "1", b: "x" },
    click,
    { a: "2", b: "y" },
    click,
    { a: "3", b: "z" },
    click,
  ],
};
