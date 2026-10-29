import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` with params a `<let>` names: each patch's entry carries its input
// to the live branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    click,
    { show: true, label: "d" },
  ],
};
