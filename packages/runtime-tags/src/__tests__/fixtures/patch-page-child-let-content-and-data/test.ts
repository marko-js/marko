import type { TestConfig } from "../../main.test";

// A `<let>` holding content beside data: the server renders the content while
// the `<let>` holds its first value, and the client renders the data from the
// page's value, so a changed init leaves it as a client render does (a fresh
// render of the changed input is no reference for that).
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
