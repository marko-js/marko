import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const step = (n: number, name: string) => ({
  n,
  $global: { user: { name }, serializedGlobals: ["user"] },
});

// The same scripts in a child whose caller passes one input from client state: the
// intersection's render runs them, so no patch also ships their effect entries.
export const config: TestConfig = {
  patches: true,
  steps: [step(1, "x"), wait, step(2, "x"), step(2, "y")],
};
