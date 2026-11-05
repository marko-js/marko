import type { TestConfig } from "../../main.test";

function hide(document: Document) {
  document.querySelector("button")!.click();
}

function ping(document: Document) {
  document.dispatchEvent(new document.defaultView!.Event("ping"));
}

export const config: TestConfig = {
  steps: [{}, hide, ping],
};
