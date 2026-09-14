import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A rest of `input` mixing with client state to select structure.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { label: "x", show: true },
    toggle,
    toggle,
    { label: "x", show: false },
    { label: "x", show: true },
  ],
};
