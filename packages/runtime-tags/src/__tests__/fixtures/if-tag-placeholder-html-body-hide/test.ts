import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{ html: "<b>1</b><i>2</i>" }, click],
};
