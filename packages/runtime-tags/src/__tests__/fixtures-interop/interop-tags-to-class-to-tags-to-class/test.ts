import type { TestConfig } from "../../main.test";

// A resumed page renders the Class parent's live content into a new branch, whose
// update then follows the leaf's; a client render orders them the other way.
export const config: TestConfig = {
  equivalent: false,
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
