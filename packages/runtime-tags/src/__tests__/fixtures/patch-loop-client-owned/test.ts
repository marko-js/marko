import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A state-driven loop is stateful structure: the client renders the
// listing, and the server value inside fills fresh into every live item.
export const config: TestConfig = {
  patches: true,
  steps: [{ note: "n1" }, click, { note: "n2" }, click, { note: "n3" }],
};
