import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A deep `input` member mixing with client state to select structure.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { opts: { show: true } },
    toggle,
    toggle,
    { opts: { show: false } },
    { opts: { show: true } },
  ],
};
