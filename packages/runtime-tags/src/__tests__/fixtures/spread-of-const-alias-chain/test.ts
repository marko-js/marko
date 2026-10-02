import type { TestConfig } from "../../main.test";

// A spread of an alias of an alias applies on the client, whose work reads the
// slot of the binding both alias.
export const config: TestConfig = {
  steps: [{ attrs: { class: "a", title: "t" } }],
};
