import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  patches: true,
  steps: [
    { flag: false, label: "a" },
    click,
    { flag: true, label: "b" },
    click,
    { flag: false, label: "c" },
  ],
};
