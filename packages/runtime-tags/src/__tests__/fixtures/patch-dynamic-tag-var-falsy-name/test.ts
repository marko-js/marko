import type { TestConfig } from "../../main.test";

// A tag var the page never wires on the client: pairing writes the child
// scope, but no var registration rides it for an entry that never loads.
export const config: TestConfig = {
  patches: true,
  steps: [{}, {}],
};
