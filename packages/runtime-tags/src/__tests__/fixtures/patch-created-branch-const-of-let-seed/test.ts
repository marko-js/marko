import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")!.click();

// A child's branch a patch creates seeds a `<const>` derived from a `<let>`: the
// join reading it with another `<let>` renders their sum, as a client render does.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { show: false, x: 1, y: 2 },
    { show: true, x: 3, y: 4 },
    click,
    { show: true, x: 5, y: 6 },
  ],
};
