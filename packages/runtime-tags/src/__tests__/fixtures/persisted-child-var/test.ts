import type { TestConfig } from "../../main.test";

const bump = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.bump")!.click();
};

// A tag-variable child renders BEFORE its parent's `_patch_child` runs, so
// the child's fills must still link into the parent's entry (they would
// silently drop if the link only registered pending).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "Cart", label: "Gadget" },
    bump,
    { title: "Cart!", label: "Widget" },
  ],
};
