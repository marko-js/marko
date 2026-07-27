import type { TestConfig } from "../../main.test";

function respread(document: Document) {
  document.querySelector("button")!.click();
}

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

export const config: TestConfig = {
  steps: [{}, type("one"), respread, type("two")],
};
