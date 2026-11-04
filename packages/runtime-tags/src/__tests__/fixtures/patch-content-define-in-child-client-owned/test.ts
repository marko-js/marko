import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A child's `<define>` branch fed by a param its own caller passes state:
// the child's caller bits hand the branch, and the reads in it, to the client.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
