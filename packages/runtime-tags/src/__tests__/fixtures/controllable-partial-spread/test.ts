import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

function typeBound(container: Element) {
  const input = container.querySelectorAll("input")[2]!;
  const window = input.ownerDocument.defaultView!;
  input.value = "typed";
  input.dispatchEvent(new window.Event("input", { bubbles: true }));
}

export const config: TestConfig = {
  steps: [{}, click, typeBound],
};
