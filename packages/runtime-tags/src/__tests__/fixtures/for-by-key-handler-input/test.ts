import type { TestConfig } from "../../main.test";

function clickLast(document: Document) {
  const buttons = document.querySelectorAll("button");
  buttons[buttons.length - 1].click();
}

// A handler input that reads only the loop key still reads it from its row's scope.
export const config: TestConfig = {
  steps: [{}, clickLast],
};
