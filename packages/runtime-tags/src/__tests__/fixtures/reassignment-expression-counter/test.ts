import type { TestConfig } from "../../main.test";

function addTwo(document: Document) {
  document.querySelector<HTMLButtonElement>("#addTwo")!.click();
}

function triple(document: Document) {
  document.querySelector<HTMLButtonElement>("#triple")!.click();
}

function cube(document: Document) {
  document.querySelector<HTMLButtonElement>("#cube")!.click();
}

export const config: TestConfig = {
  steps: [{}, addTwo, triple, cube],
};
