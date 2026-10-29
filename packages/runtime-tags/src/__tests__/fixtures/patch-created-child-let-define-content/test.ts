import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body's content a patch-created child holds in its `<let>`
// keeps its holes current: its instance subscribes, as the page's does.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    clear,
    { show: true, label: "d" },
  ],
};
