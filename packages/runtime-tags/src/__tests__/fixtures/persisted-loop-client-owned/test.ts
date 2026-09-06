import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A state-driven loop is client-owned structure: the client owns the
// listing, and the server value inside fills fresh into every live item.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, click, { note: "n2" }, click, { note: "n3" }],
};
