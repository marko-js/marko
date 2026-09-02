import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A computed member read mixed into a state derivation fills the whole
// input, so the derived selector recomputes client-side.
export const config: TestConfig = {
  persisted: true,
  steps: [{ key: "a", a: 5 }, click, { key: "a", a: 11 }, click],
};
