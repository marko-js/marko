import type { TestConfig } from "../../main.test";

function fireX(document: Document) {
  document
    .querySelector("div")!
    .dispatchEvent(
      new (document.defaultView as any).CustomEvent("x", { bubbles: true }),
    );
}

export const config: TestConfig = {
  steps: [{}, fireX],
};
