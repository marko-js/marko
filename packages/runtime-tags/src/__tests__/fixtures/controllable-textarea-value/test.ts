import type { TestConfig } from "../../main.test";

function type(value: string) {
  return (container: Element) => {
    const textarea = container.querySelector("textarea")!;
    const window = textarea.ownerDocument.defaultView!;
    textarea.value = value;
    textarea.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

export const config: TestConfig = {
  steps: [{}, type("w"), type("wor"), type("world")],
};
