import type { TestConfig } from "../../main.test";

// The content also renders in a dynamic tag the template can't see into, which
// keeps a live instance: each patch still fills what the content reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a", wrap: true },
    { more: true, label: "b", wrap: true },
    { more: true, label: "c", wrap: true },
  ],
};
