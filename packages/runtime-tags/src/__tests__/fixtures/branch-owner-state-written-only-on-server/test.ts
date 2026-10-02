import type { TestConfig } from "../../main.test";

function clickOwn(document: Document) {
  document.getElementById("own")!.click();
}

function clickParam(document: Document) {
  document.getElementById("param")!.click();
}

export const config: TestConfig = {
  steps: [{ show: true }, clickOwn, clickParam],
};
