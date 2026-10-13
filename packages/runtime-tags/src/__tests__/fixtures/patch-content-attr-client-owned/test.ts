import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// `content=` a client-owned condition selects is the resumed page's, as spread
// content is: a patch fills what it reads and never pairs its branch.
export const config: TestConfig = {
  patches: true,
  steps: [{ b: "b1" }, { b: "b2" }, toggle, { b: "b3" }, toggle],
};
