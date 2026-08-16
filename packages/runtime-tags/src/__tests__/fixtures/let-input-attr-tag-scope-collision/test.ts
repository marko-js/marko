import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // SSR and CSR renders differ because SSR only shows the initial state while
  // CSR exercises the update steps.
  equivalent: false,
  steps: [
    { submitLabel: "Install", open: true },
    { submitLabel: "Save", open: true },
    { submitLabel: "Save", open: false },
  ],
};
