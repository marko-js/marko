import type { TestConfig } from "../../main.test";

const clickCount = new WeakMap<Document, number>();

export const config: TestConfig = {
  steps: [{}, click, click, click, click],
};

function click(container: Element) {
  container.querySelectorAll("button")![next(container)].click();
}

function next(container: Element) {
  const doc = container.ownerDocument;
  const num = (clickCount.get(doc) ?? -1) + 1;
  clickCount.set(doc, num);
  return num;
}
