import type { TestConfig } from "../../main.test";
const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A root param that only forwards into a client-fed child group: its fill
// registers on the client even though the forwarder is pure.
export const config: TestConfig = {
  persisted: true,
  steps: [{ x: 1 }, { x: 2 }, click, { x: 3 }],
};
