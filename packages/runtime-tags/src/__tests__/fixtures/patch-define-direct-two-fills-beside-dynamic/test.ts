import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An attribute and a spread each fill a directly called `<define>`'s param whose
// body a dynamic call renders client-side.
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
