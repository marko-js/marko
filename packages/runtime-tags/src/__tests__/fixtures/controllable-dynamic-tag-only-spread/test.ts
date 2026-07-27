import type { TestConfig } from "../../main.test";

function selectC(document: Document) {
  const select = document.querySelector("select")!;
  select.value = "c";
  select.dispatchEvent(
    new select.ownerDocument.defaultView!.Event("input", { bubbles: true }),
  );
}

// The only spread here is on a tag whose name is dynamic, so the page must
// enable every control kind — nothing else in the template would.
export const config: TestConfig = {
  steps: [{}, selectC],
};
