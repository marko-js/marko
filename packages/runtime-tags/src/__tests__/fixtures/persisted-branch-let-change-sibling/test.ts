import type { TestConfig } from "../../main.test";

// A constructed branch's change handler lives in a SIBLING tag's scope: the
// bind path climbs to the shared owner and descends the child link.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a", show: false }, { title: "b", show: true }, click],
};

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}
