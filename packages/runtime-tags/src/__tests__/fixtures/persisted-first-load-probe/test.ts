import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

// Persisted twin of first-load-probe; see that fixture's note.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      title: "First",
      recs: [{ id: 1, name: "one" }],
      $global: { persisted: true },
    },
    flush,
  ],
};
