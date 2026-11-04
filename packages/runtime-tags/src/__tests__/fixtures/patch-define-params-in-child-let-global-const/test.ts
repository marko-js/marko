import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` a call renders and a child's `<let>` holds reads a `<const>` of `$global`:
// a patch writes the `<const>`, whose scope set reaches the client's copy.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { label: "a" } },
    { $global: { label: "b" } },
    clear,
    { $global: { label: "c" } },
  ],
};
