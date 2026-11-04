import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A loop's read of a `<define>` param every call passes client state: no patch fills
// it, so no subscriber walk ships for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true },
    click,
    { show: true },
    { show: false },
    { show: true },
  ],
};
