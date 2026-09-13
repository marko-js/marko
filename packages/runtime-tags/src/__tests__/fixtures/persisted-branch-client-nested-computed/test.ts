import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A computed member read selecting structure inside client-owned structure
// fills the whole input: the client re-selects from the latest bag.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { key: "a", a: true },
    click,
    { key: "a", a: false },
    { key: "b", b: true },
    click,
  ],
};
