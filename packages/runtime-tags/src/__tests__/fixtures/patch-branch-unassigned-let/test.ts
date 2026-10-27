import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A never-assigned branch `<let>` is client state seeded from its value: a
// construct paints it from the live count, and clicks and patches keep it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true },
    click,
    { show: false },
    { show: true },
    click,
    { show: true },
  ],
};
