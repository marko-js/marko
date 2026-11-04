import type { TestConfig } from "../../main.test";
import { navigate, wait } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// An await only stateful structure renders is never reached by a patch, so
// the page links no `patch-boundary`.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, click, wait, navigate({ title: "b" })],
};
