import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    click,
    click,
    { show: true, label: "b" },
    click,
    { show: false, label: "c" },
    { show: true, label: "d" },
  ],
};
