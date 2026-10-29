import type { TestConfig } from "../../main.test";

// A data `<let>` a later patch first reads: the page writes it where a patch
// may create the read, so a changed init leaves the `<let>` its value, as a
// client render does.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { n: 1, more: false },
    { n: 1, more: true },
    { n: 1, more: false },
    { n: 2, more: true },
  ],
};
