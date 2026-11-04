import type { TestConfig } from "../../main.test";

// A `<let>` a patch fills in a created child, passing one member to a tag, carries
// only that member.
export const config: TestConfig = {
  patches: true,
  steps: [{}, { show: true, label: "a" }],
};
