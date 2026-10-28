import type { TestConfig } from "../../main.test";

// A spread reading three params beside an attribute joining one of them with
// a fourth: the page gates each value on groups its analysis made.
export const config: TestConfig = {
  patches: true,
  steps: [
    { url: "/a", title: "A", cls: "one", width: 1 },
    { url: "/b", title: "B", cls: "two", width: 2 },
  ],
};
