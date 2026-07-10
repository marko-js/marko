import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

function change(container: Element) {
  const div = container.querySelector("div");
  if (!div) return;
  const window = div.ownerDocument.defaultView!;
  div.dispatchEvent(new window.Event("change", { bubbles: true }));
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait, flush, wait, change],
};
