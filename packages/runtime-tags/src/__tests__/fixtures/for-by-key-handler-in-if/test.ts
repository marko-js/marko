import type { TestConfig } from "../../main.test";

function clickLast(document: Document) {
  const buttons = document.querySelectorAll("button");
  buttons[buttons.length - 1].click();
}

// A handler input nested in a row's `<if>` that reads only the loop key reads
// it through its owner, the row's scope.
export const config: TestConfig = {
  steps: [{}, clickLast],
};
