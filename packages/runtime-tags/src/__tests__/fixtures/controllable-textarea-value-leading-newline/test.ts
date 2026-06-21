import type { TestConfig } from "../../main.test";

// A `<textarea>` value that begins with a newline must round-trip through SSR
// resume: the HTML parser strips a single leading newline from `<textarea>`
// content, so the server emits a compensating one. Without it, resume would
// reconstruct the controlled value without the leading newline, diverging from
// client rendering. Typing then exercises the resumed change handler.
function type(value: string) {
  return (container: Element) => {
    const textarea = container.querySelector("textarea")!;
    const window = textarea.ownerDocument.defaultView!;
    textarea.value = value;
    textarea.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

export const config: TestConfig = {
  steps: [{}, type("\nworld")],
};
