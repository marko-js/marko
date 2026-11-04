import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "x", label: "a" },
    click,
    { a: "y", label: "b" },
    click,
    { a: "z", label: "c" },
  ],
};
