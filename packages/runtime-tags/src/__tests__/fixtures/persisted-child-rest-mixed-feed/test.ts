import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Client state sharing the rest grain with a server value: a patch that
// changes only the server value must still update the child.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "l1" }, { label: "l2" }, click, { label: "l3" }],
};
