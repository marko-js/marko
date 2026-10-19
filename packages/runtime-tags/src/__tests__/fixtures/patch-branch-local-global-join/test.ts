import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};
const global = (g: string) => ({ g, serializedGlobals: ["g"] });

// A branch local from `$global` joins inputs a caller may pass client state:
// the global's own patch keeps it current, so no slot write ships for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: "p", y: "q", show: true, $global: global("G") },
    click,
    { x: "r", y: "s", show: true, $global: global("H") },
    click,
    { x: "t", y: "u", show: true, $global: global("I") },
  ],
};
