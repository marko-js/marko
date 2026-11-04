import type { TestConfig } from "../../main.test";

// A call in content passes a content param beside an input its caller passes a
// constant: the server still updates that group, so a patch changing the param renders.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ id: 1, label: "a" }] },
    { items: [{ id: 1, label: "b" }] },
  ],
};
