import type { TestConfig } from "../../main.test";

// `content=` a native tag renders only on a param: the page writes none of
// what the content reads while it is unrendered.
export const config: TestConfig = {
  patches: true,
  steps: [
    { on: true, rec: { name: "SHOWN_r1", secret: "SECRET_r1" } },
    { on: false, rec: { name: "SECRET_r2", secret: "SECRET_rr2" } },
    { on: true, rec: { name: "SHOWN_r3", secret: "SECRET_r3" } },
  ],
};
