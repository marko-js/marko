import type { TestConfig } from "../../main.test";

function clickLast(document: Document) {
  const buttons = document.querySelectorAll("button");
  buttons[buttons.length - 1].click();
}

function add(document: Document) {
  document.querySelector<HTMLButtonElement>("button.add")!.click();
}

// A handler input that reads only the loop index, the key of a loop without
// `by`, reads it from its row's scope, resumed or added on the client.
export const config: TestConfig = {
  steps: [{}, clickLast, add, clickLast],
};
