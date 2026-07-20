import type { TestConfig } from "../../main.test";

function add(document: Document) {
  document.querySelector<HTMLButtonElement>("#a")!.click();
}
function toggleOuter(document: Document) {
  document.querySelector<HTMLButtonElement>("#o")!.click();
}

export const config: TestConfig = {
  steps: [{}, add, toggleOuter],
};
