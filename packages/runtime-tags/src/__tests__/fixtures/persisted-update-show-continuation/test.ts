import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// A multi-node `<show>` body straddles a branch marker in the parent scope:
// the encoding must force a full-form node marker after every branch marker.
const inputA = {
  title: "Alpha",
  detail: "first detail",
  extra: "first extra",
  expanded: true,
};

const inputB = {
  title: "Beta",
  detail: "second detail",
  extra: "second extra",
  expanded: true,
};

export const config: TestConfig = {
  persisted: true,
  // Persisted SSR carries resume-marker comment nodes a client render never
  // produces, so the trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    { ...inputA, $global: { persisted: true } },
    navigate({ ...inputB, $global: { persisted: true } }),
  ],
};
