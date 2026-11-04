import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A spread input reaches a directly called `<define>` whose body a dynamic call
// renders client-side: only the patch's key reaches its fill.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a", rest: { label: "a" } },
    click,
    { show: true, label: "b", rest: { label: "b" } },
    click,
    { show: true, label: "c", rest: { label: "c" } },
    click,
  ],
};
