import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, show, call],
};

function show(document: Document) {
  document.querySelector<HTMLButtonElement>(".show")!.click();
}

function call(document: Document) {
  document.querySelector<HTMLButtonElement>(".call")!.click();
}
