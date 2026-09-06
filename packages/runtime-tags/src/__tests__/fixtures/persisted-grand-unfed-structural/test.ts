import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A nested dual-purpose child with its structural param unfed admits:
// recursion only gates the groups the call site actually feeds.
export const config: TestConfig = {
  persisted: true,
  steps: [{ a: "1" }, click, { a: "2" }, click, { a: "3" }, click],
};
