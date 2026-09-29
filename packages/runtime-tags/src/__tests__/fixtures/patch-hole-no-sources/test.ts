import type { TestConfig } from "../../main.test";

// A hole with nothing request-derived behind it (a call, a `<const>` of
// statics, a loop over a static list) renders once: a patch never re-fills
// it at the root, though a scope the patch creates takes its value as a
// seed, and rows the page pairs still seed, since the server cannot tell a
// paired row from a created one.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  skip_parity: true,
  skip_fresh_render: true,
  steps: [
    { title: "a", show: false },
    { title: "b", show: false },
    { title: "c", show: true },
  ],
};
