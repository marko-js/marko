import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A local renderer passed as a prop the child renders inside a
// client-selected branch renders from the parent's live content.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }, click, click, { title: "c" }],
};
