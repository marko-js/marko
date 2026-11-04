import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A registered body composing a lazy child, whose own body that client code never
// passes: the client renders the child behind a marker, so both ship full shells.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, note: "x" },
    { show: true, note: "y" },
    wait,
    { show: true, note: "z" },
  ],
};
