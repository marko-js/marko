import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An intersection read (`input.msg` × `count`) inside a content section
// nested in a client-owned branch: the fill must still reach the content
// scope after a patch changes `msg`.
export const config: TestConfig = {
  persisted: true,
  steps: [{ msg: "a" }, click, { msg: "b" }, click, { msg: "c" }],
};
