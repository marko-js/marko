import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A rest of the input mixed into a state test fills as its own value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ known: "k", x: 1 }, click, click, { known: "k2", x: 0 }],
};
