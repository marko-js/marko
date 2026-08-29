import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A direct `$global` member read inside client-owned structure hoists into
// a root derivation delivered as a fill: a patched global re-renders the
// read, and a re-shown branch renders the latest value.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "acme" } },
    { $global: { brand: "bmce" } },
    toggle,
    toggle,
  ],
};
