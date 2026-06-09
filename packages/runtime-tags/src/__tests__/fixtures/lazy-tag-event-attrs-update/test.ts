import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, click, click, mouseoverBody, wait, click],
  equivalent: false,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}

function mouseoverBody(container: Element) {
  container.ownerDocument.body.dispatchEvent(
    new container.ownerDocument.defaultView!.Event("mouseover", {
      bubbles: true,
    }),
  );
}
