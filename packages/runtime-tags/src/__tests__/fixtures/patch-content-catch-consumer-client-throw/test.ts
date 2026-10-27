import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A client error renders content a child passes to its `@catch`, read or
// not, with the param a patch changed while the body still rendered.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b" }, click, click, { label: "c" }],
};
