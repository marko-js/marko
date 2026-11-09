import type { TestConfig } from "../../main.test";

export const config: TestConfig = { steps: [{}, pend] };

function pend(document: Document) {
  document.querySelector("button")!.click();
}
