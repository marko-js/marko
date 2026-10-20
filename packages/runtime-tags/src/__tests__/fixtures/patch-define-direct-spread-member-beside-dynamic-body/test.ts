import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  patches: true,
  steps: [
    { attrs: { label: "a" } },
    { attrs: { label: "b" } },
    click,
    { attrs: { label: "c" } },
  ],
};
