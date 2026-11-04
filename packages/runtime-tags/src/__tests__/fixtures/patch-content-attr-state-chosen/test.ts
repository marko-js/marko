import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `content=` client state chooses is the client's to render: a patch keeps
// the chosen content's reads current, before a toggle and after one.
export const config: TestConfig = {
  patches: true,
  steps: [{ b: "b1" }, { b: "b2" }, toggle, { b: "b3" }, toggle],
};
