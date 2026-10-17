import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<await>` body gets its value, pending or not, after its setup writes the shell.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, color: "red" },
    { show: true, color: "red" },
    wait,
    { show: true, color: "blue" },
    wait,
  ],
};
