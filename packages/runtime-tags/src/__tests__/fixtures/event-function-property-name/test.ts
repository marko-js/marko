import type { TestConfig } from "../../main.test";

function fireName(document: Document) {
  document
    .querySelector("div")!
    .dispatchEvent(
      new (document.defaultView as any).CustomEvent("name", { bubbles: true }),
    );
}

export const config: TestConfig = {
  steps: [{}, fireName],
};
