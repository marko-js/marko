import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, click, click, mouseoverBody, wait, click],
  equivalent: false,
};

function click(document: Document) {
  document.querySelector("button")!.click();
}

function mouseoverBody(document: Document) {
  document.body.dispatchEvent(
    new document.defaultView!.Event("mouseover", {
      bubbles: true,
    }),
  );
}
