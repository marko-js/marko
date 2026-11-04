import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const brand = (value: string) => ({
  brand: value,
  serializedGlobals: ["brand"],
});

// Calls pass a stateful body a `$global` key the section also renders: each
// call's init runs a join of its own, and the text stays in setup's join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a", $global: brand("x") },
    { show: true, label: "a", $global: brand("w") },
    { show: false, label: "a", $global: brand("w") },
    { show: true, label: "b", $global: brand("y") },
    click,
    { show: true, label: "c", $global: brand("z") },
  ],
};
