import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLElement>("button")!.click();
}

// A patch of an embedded (non-page) template falls back to a document.
export const config: TestConfig = {
  patches: true,
  embedded: true,
  expect_rejection: true,
  steps: [{ title: "a" }, click, { title: "b" }],
};
