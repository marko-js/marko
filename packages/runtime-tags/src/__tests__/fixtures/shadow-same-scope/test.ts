import type { TestConfig } from "../../main.test";

const clickCount = new WeakMap<Document, number>();

export const config: TestConfig = {
  steps: [{}, click, click, click, click],
};

function click(document: Document) {
  document.querySelectorAll("button")![next(document)].click();
}

function next(document: Document) {
  const doc = document;
  const num = (clickCount.get(doc) ?? -1) + 1;
  clickCount.set(doc, num);
  return num;
}
