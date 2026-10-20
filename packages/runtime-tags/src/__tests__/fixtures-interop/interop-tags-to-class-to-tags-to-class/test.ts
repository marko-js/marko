import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, clickTags, clickClass, clickTagsChild, clickClassLeaf, clickTags],
};

function clickTags(document: Document) {
  document.querySelector<HTMLButtonElement>("#tags")!.click();
}

function clickClass(document: Document) {
  document.querySelector<HTMLButtonElement>("#class")!.click();
}

function clickTagsChild(document: Document) {
  document.querySelector<HTMLButtonElement>("#tags-child")!.click();
}

function clickClassLeaf(document: Document) {
  document.querySelector<HTMLButtonElement>("#class-leaf")!.click();
}
