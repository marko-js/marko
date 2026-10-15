import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// One prop read as the tag name and in a state intersection: the text's fill
// join and the tag signal share one fill key, so a change updates both.
export const config: TestConfig = {
  patches: true,
  steps: [{ content: "div" }, click, { content: "span" }],
};
