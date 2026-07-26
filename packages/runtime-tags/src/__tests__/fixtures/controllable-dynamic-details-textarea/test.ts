import type { TestConfig } from "../../main.test";

function toggleDetails(document: Document) {
  const details = document.querySelector("details")!;
  const window = details.ownerDocument.defaultView!;
  details.open = true;
  details.dispatchEvent(new window.Event("toggle", { bubbles: false }));
}

function typeText(document: Document) {
  const textarea = document.querySelector("textarea")!;
  const window = textarea.ownerDocument.defaultView!;
  textarea.value = "second";
  textarea.dispatchEvent(new window.Event("input", { bubbles: true }));
}

// Controlled `<details>`/`<textarea>` reached through a dynamic tag: their
// handlers ride the branch scope the resume script wires up, so the
// interaction has to survive in optimized builds too.
export const config: TestConfig = {
  steps: [{}, toggleDetails, typeText],
};
