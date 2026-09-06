import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A never-assigned branch `<let>` derives from state like a `<const>`:
// a construct paints it from the live count and clicks keep it current.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: true }, click, { show: false }, { show: true }, click],
};
