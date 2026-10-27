import type { TestConfig } from "../../main.test";

// patch-created-row-static-item-handlers without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, keydown, click],
};

function keydown(document: Document) {
  document
    .querySelector("textarea")!
    .dispatchEvent(
      new document.defaultView!.Event("keydown", { bubbles: true }),
    );
}

function click(document: Document) {
  document.querySelector("button")!.click();
}
