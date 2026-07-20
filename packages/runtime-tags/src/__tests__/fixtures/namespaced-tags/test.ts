import type { TestConfig } from "../../main.test";

function clickParent(document: Document) {
  (document.querySelector(".toggle-parent") as HTMLButtonElement).click();
}

function clickChild(document: Document) {
  (document.querySelector(".toggle-child") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [
    {
      value: "<a href=#></a>",
    },
    clickParent,
    clickParent,
    clickParent,
    clickChild,
    clickChild,
    clickChild,
  ],
};
