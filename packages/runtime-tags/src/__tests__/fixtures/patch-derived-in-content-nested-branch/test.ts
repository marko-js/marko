import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same with the branch under an `<if>` of the content.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }],
};
