import type { TestConfig } from "../../main.test";

function clickList(document: Document) {
  document.querySelector("ul")!.click();
}

export const config: TestConfig = {
  steps: [{ items: true }, clickList, clickList],
};
