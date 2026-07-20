import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function change(document: Document) {
  const div = document.querySelector("div")!;
  const window = div.ownerDocument.defaultView!;
  div.dispatchEvent(new window.Event("change", { bubbles: true }));
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait, change],
};
