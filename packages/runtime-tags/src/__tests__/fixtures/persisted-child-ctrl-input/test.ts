import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

// A controllable bound through the child's input writes back to parent
// state over tag-args: typing updates both sides, patches stay inert.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, type("yo"), {}, click],
};
