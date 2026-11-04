import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `<define>` param every call passes `$global`: the server alone sources its
// group, so a patch writes it in place wherever the body renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { text: "a" } },
    { $global: { text: "b" } },
    click,
    { $global: { text: "c" } },
    click,
  ],
};
