import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

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

// The event trigger wins before visibility is flushed. Parent updates buffered
// before that first trigger must still reach the loaded child.
export const config: TestConfig = {
  steps: [{}, click, click, mouseoverBody, wait, click],
  equivalent: false,
};
