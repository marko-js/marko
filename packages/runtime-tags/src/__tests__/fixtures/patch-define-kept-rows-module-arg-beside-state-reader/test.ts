import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

export const config: TestConfig = {
  patches: true,
  steps: [
    { open: true, label: "a" },
    { open: true, label: "b" },
    click,
    { open: true, label: "c" },
  ],
};
