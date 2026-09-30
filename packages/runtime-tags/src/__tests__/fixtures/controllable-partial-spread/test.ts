import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

function typeBound(document: Document) {
  const input = document.querySelectorAll("input")[2]!;
  const window = input.ownerDocument.defaultView!;
  input.value = "typed";
  input.dispatchEvent(new window.Event("input", { bubbles: true }));
}

export const config: TestConfig = {
  steps: [{}, click("button"), typeBound],
};
