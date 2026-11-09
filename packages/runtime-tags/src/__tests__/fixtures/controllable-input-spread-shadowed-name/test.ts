import type { TestConfig } from "../../main.test";

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

// `tags/input.marko` shadows the name, but a template literal still names the
// `<input>` element, so its spread is controlled.
export const config: TestConfig = {
  steps: [{}, type("w"), type("wor"), type("world")],
};
