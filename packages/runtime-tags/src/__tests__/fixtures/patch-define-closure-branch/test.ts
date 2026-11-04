import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch the template's state renders inside a `<define>` body reads the
// body's param: opened after a patch, it shows that page's value.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }, click, { label: "c" }, click],
};
