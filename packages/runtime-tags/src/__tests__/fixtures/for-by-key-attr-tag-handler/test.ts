import type { TestConfig } from "../../main.test";

function clickLast(document: Document) {
  const buttons = document.querySelectorAll("button");
  buttons[buttons.length - 1].click();
}

// An attribute tag handler reading a loop local and only the loop key from its
// row's scope receives that scope beside its locals.
export const config: TestConfig = {
  steps: [{}, clickLast],
};
