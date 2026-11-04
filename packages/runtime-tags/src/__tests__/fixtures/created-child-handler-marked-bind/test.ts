import type { TestConfig } from "../../main.test";

// patch-created-child-handler-marked-bind without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, keydown],
};

function keydown(document: Document) {
  document
    .querySelector("textarea")!
    .dispatchEvent(
      new document.defaultView!.Event("keydown", { bubbles: true }),
    );
}
