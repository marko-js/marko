import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A renderer swap constructs a child with effects: its handlers attach from
// the construct envelope's ids.
export const config: TestConfig = {
  persisted: true,
  steps: [{ mode: "plain", label: "a" }, { mode: "live", label: "b" }, click],
};
