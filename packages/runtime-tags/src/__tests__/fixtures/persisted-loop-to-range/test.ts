import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A range loop mixing a state bound with a filled `from`: patches move
// the start, clicks move the end, the client owns the range.
export const config: TestConfig = {
  persisted: true,
  steps: [{ from: 0 }, click, { from: 1 }, click, { from: 0 }],
};
