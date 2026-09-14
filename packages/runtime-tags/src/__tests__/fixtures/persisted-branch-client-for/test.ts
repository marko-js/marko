import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server list renders a loop nested in client-owned structure: the
// array delivers as a fill and the client re-lists on every write.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { items: ["a", "b"] },
    click,
    click,
    { items: ["a", "b", "c"] },
    { items: ["z"] },
  ],
};
