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

// A server-bound change handler on a control inside client-owned
// structure: each patch re-binds it (bind-aware fill), so calls after a
// patch read the live server value.
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
