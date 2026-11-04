import type { TestConfig } from "../../main.test";

// A `<define>` body one call feeds from state and one, created, from request
// data: the created body mounts its effect once, and both re-run it when the
// page's input changes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", page: 1 },
    { show: true, label: "b", page: 1 },
    { show: true, label: "b", page: 2 },
  ],
};
