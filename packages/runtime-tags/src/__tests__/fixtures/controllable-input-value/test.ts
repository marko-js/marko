import type { TestConfig } from "../../main.test";

function type(value: string) {
  return (container: Element) => {
    const input = container.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

export const config: TestConfig = {
  steps: [{}, type("w"), type("wor"), type("world")],
};
