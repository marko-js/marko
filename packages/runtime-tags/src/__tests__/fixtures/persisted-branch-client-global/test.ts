import type { TestConfig } from "../../main.test";

const inc = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `$global` hole inside client-owned structure: the read hoists into a
// root derivation delivered as a fill, so the client-revealed branch
// renders the latest patched brand.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { $global: { brand: "acme" } },
    inc,
    { $global: { brand: "bmce" } },
    inc,
  ],
};
