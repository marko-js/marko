import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A value derived in content no patch writes, rendered in content a consumer withholds under client state, refreshes after a patch.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }],
};
