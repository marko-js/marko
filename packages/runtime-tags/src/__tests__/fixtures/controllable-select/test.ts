import type { TestConfig } from "../../main.test";

function selectC(document: Document) {
  const select = document.querySelector(`select`)!;
  const window = select.ownerDocument.defaultView!;
  select.value = "c";
  select.dispatchEvent(new window.Event("input", { bubbles: true }));
}

export const config: TestConfig = {
  steps: [{}, selectC],
};
