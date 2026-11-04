import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Content a patch creates from its shell seeds a value it derives for a
// handler, and derives it again when a later patch fills its source.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
    click,
  ],
};
