import type { TestConfig } from "../../main.test";

// A patch creates a child that attaches its parent's bound handler to a native
// element: the server sends the handler as a marked bind, which the parent's
// module must link (marko-chat: signup -> channel creates the message composer,
// whose onKeyDown ui-text-area attaches).
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, keydown],
};

function keydown(document: Document) {
  document
    .querySelector("textarea")!
    .dispatchEvent(
      new document.defaultView!.Event("keydown", { bubbles: true }),
    );
}
