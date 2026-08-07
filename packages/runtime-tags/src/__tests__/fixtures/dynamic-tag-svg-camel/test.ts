import type { TestConfig } from "../../main.test";

function clickGradient(document: Document) {
  document
    .getElementById("g")!
    .dispatchEvent(
      new (document.defaultView as any).MouseEvent("click", { bubbles: true }),
    );
}

export const config: TestConfig = {
  // skip_optimize: optimize resume of a dynamic native tag with spread event
  // attrs crashes in dynamicTagScript (reported; independent of this fixture).
  skip_optimize: true,
  equivalent: false,
  steps: [{ tag: "linearGradient" }, clickGradient],
};
