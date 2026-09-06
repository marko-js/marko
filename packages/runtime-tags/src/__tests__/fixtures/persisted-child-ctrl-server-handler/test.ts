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

// A server-bound handler relayed through an admitted child to its
// control: the parent fill re-binds it on each patch, and the relay
// hands the live handler to the child's controllable.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { prefix: "A" },
    click,
    type("y"),
    { prefix: "B" },
    type("z"),
    click,
    { prefix: "C" },
    click,
    type("w"),
  ],
};
