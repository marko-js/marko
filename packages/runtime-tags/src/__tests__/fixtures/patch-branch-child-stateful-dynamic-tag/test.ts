import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created child's root renders the dynamic tag its own state selects.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "one" },
    { show: true, label: "two" },
    click,
    { show: true, label: "three" },
  ],
};
