import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body a created branch calls reads a param its caller passes
// client state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    click,
    { show: false },
    click,
    { show: true },
    click,
  ],
};
