import type { TestConfig } from "../../main";
import { flush, wait } from "../../utils/resolve";

function change(document: Document) {
  const div = document.querySelector("div");
  if (!div) return;
  const window = div.ownerDocument.defaultView!;
  div.dispatchEvent(new window.Event("change", { bubbles: true }));
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, flush, flush, wait, flush, wait, change],
};
