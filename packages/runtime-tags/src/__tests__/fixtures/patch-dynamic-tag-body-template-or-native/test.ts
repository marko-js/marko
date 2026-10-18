import type { TestConfig } from "../../main.test";

// A body a dynamic tag renders natively or hands to a template rendering it in
// patched structure: the patch renders it every time, so nothing it reads fills.
export const config: TestConfig = {
  patches: true,
  steps: [
    { native: false, x: "a" },
    { native: true, x: "b" },
    { native: true, x: "c" },
    { native: false, x: "d" },
  ],
};
