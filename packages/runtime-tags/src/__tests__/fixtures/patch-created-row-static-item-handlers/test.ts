import type { TestConfig } from "../../main.test";

// A patch creates loop rows over a static list whose handlers read the row's item:
// the created row takes the item as a seed, as nothing else sends it.
export const config: TestConfig = {
  patches: true,
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
