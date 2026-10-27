import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` param a join with client state fills is registered by the
// join alone; its effect re-runs when a flush changes it.
export const config: TestConfig = {
  patches: true,
  steps: [{ a: "x" }, click, { a: "y" }, click, { a: "z" }],
};
