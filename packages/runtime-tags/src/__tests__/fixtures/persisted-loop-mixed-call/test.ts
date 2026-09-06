import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A call over client state and a server fill re-evaluates client-side; the
// fill keeps the server operand current.
export const config: TestConfig = {
  persisted: true,
  steps: [{ extra: ["x"] }, { extra: ["y"] }, click, { extra: ["z"] }],
};
