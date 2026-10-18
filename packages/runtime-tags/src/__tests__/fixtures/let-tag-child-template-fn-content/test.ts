import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function and content a child template holds in `<let>`s register only as
// their reasons say outside a patch build.
export const config: TestConfig = {
  steps: [{ label: "a" }, click],
};
