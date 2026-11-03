import type { TestConfig } from "../../main.test";

// A `<define>` called with an argument joining two inputs: the call site's join
// derives the param, looked up in the call's section.
export const config: TestConfig = {
  patches: true,
  steps: [
    { q: "/a?", item: "1" },
    { q: "/b?", item: "2" },
  ],
};
