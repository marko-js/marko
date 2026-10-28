import type { TestConfig } from "../../main.test";

// A child renders the content it is handed with an attribute from its caller:
// the content stays, so a patch pairs it, with no client code on the page.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    { x: 1, y: "z" },
  ],
};
