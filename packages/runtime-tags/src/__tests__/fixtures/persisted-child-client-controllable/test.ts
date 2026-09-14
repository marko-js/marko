import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button:last-of-type")!.click();
};

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

// A controllable bound to the child's own state runs the standard DOM
// machinery: the instance is pure client, so no patch can echo over it.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, type("z"), {}, click, click],
};
