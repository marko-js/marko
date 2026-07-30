import type { TestConfig } from "../../main";

function add(document: Document) {
  (document.querySelector("#add") as HTMLButtonElement).click();
}

function remove(document: Document) {
  (document.querySelector("#remove") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, add, remove, remove, add],
};
