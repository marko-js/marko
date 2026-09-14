import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A filled server value compared against the loop key: the keyed
// selector optimization stands down and the scan join repaints.
export const config: TestConfig = {
  persisted: true,
  steps: [{ selected: 1 }, click, { selected: 3 }, { selected: 2 }],
};
