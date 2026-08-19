import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A contribution-less group cannot change: its writes reach only a fresh
// scope's setup (a construct still needs the constant) and its group-gated
// resume data prunes, while server-fed siblings patch.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click],
};
