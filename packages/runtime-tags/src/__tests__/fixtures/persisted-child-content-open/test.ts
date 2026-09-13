import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Open on first paint: resume adopts the content scope's subscribers,
// the first patch fills through the boundary, and hidden patches stay
// fresh on reveal.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
