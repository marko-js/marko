import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An interactive page links its features through the dom module, so a
// server-fed `content=` must import its patcher (`patches/attr-content`) there.
export const config: TestConfig = {
  patches: true,
  steps: [{ html: "a" }, click, { html: "b" }, click, { html: "a" }],
};
