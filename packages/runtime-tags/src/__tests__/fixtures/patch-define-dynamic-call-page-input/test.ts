import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A dynamic call renders the `<define>` body with a page input, so its branch
// is a patch's to create, though the direct call passes state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", show: false },
    { label: "b", show: true },
    click,
    { label: "c", show: false },
    click,
    { label: "d", show: true },
  ],
};
