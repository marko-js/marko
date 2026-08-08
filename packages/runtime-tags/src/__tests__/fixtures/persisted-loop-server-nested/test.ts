import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server list loops inside a client-owned loop: every outer iteration
// re-lists off the same fill write.
export const config: TestConfig = {
  persisted: true,
  steps: [{ list: ["x"] }, click, { list: ["x", "y"] }, { list: [] }],
};
