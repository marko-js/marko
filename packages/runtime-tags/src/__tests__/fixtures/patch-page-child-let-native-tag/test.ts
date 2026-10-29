import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A native tag a `<let>` names: each patch's entry carries its attributes to
// the live element.
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
