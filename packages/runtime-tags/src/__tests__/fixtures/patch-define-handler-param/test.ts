import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body's handler reads its param: a patch keeps the param its
// call passes current, so the click adds the latest page's id.
export const config: TestConfig = {
  patches: true,
  steps: [{ id: "1" }, { id: "2" }, click],
};
