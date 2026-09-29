import type { TestConfig } from "../../main.test";

// A child's hole with no request-derived source (a fresh number each
// render) sits in a wrapper's content body. A patch back to the same route
// keeps that body paired, so it ships nothing for the hole.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{}, {}],
};
