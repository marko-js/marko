import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const brand = (value: string) => ({
  brand: value,
  serializedGlobals: ["brand"],
});

// A call passes a stateful body a `$global` key, beside a param and beside a
// constant: its init runs the key's join, which re-runs resumed or created.
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
