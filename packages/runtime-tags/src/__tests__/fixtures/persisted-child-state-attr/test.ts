import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.inc")!.click();
};
const spin = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.spin")!.click();
};

// A child whose attrs are all client-state-fed is client-owned: patches
// skip its server render entirely and its live DOM/state stay intact.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "Store" }, inc, spin, { title: "Store!" }, inc, spin],
};
