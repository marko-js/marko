import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Ownership composes through nesting: the grandchild's mask derives its
// text bit from the middle template's own mask, so the server-fed text
// updates while the client-fed note keeps its live value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, click, { title: "Store!" }, click],
};
