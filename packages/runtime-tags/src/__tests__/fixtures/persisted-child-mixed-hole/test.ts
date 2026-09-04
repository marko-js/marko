import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// One hole reading a server param and a client-fed param: the server value
// fills at the parent and the tag-args signal re-feeds the child.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }],
};
