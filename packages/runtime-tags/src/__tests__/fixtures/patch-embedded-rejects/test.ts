import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLElement>("button")!.click();
}

// A debug build refuses a patch of an embedded (non-page) template, so the page
// loads the document; production assumes a page.
export const config: TestConfig = {
  patches: true,
  embedded: true,
  skip_optimize: true,
  expect_rejection: true,
  steps: [{ title: "a" }, click, { title: "b" }],
};
