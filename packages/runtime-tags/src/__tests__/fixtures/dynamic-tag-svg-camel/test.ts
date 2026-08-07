import type { TestConfig } from "../../main.test";

function clickGradient(document: Document) {
  document
    .getElementById("g")!
    .dispatchEvent(
      new (document.defaultView as any).MouseEvent("click", { bubbles: true }),
    );
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{ tag: "linearGradient" }, clickGradient],
};
