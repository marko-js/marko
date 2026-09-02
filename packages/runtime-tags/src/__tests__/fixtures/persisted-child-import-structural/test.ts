import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An imported value gating a child's structure is client code: the client
// instance selects its structure from it, while the server fill keeps the
// text current.
export const config: TestConfig = {
  persisted: true,
  steps: [{ a: "1" }, { a: "2" }, click, click],
};
