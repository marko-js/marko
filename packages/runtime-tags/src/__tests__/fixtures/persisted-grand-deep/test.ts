import type { TestConfig } from "../../main.test";

const count = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".n")!.click();
};

// Three component levels inside client-owned structure with client
// state in the middle: fills reach the bottom, middle state survives.
export const config: TestConfig = {
  persisted: true,
  steps: [{ note: "n1" }, count, { note: "n2" }, { note: "n3" }],
};
