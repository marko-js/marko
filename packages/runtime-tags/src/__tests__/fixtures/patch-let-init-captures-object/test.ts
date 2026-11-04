import type { TestConfig } from "../../main.test";

// A `<let>` whose object init captures itself in a callback: the sources walk ends there.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{}, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
