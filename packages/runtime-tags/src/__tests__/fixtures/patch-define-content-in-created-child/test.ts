import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

// A `<define>` renderer a flush hands a created child resolves through the
// page's registration of it, params included.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, { label: "b", show: true }, toggle],
};
