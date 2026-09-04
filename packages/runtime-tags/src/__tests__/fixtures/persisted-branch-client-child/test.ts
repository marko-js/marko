import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A leaf child inside client-owned structure is a pure client instance:
// its filled input stays fresh for whenever the client reveals it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "l1" }, click, { label: "l2" }, click, { label: "l3" }],
};
