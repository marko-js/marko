import type { TestConfig } from "../../main.test";

function type(index: number, value: string) {
  return (container: Element) => {
    const input = container.querySelectorAll("input")[index]!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

export const config: TestConfig = {
  steps: [{}, type(0, "a2"), type(1, "b2")],
};
