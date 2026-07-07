import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// A multi-node `<show>` body renders in the PARENT scope AND writes a branch
// start marker delimiting its range. Parent-scope holes before the branch
// (`${input.title}`, `count ${n}`) and inside its body (`${input.detail}`)
// therefore share a scope id straddling that branch marker. The persisted
// continuation encoding must force a full-form node marker after every
// branch marker; if the writer fails to reset its per-chunk run register the
// client walker rebinds the body holes onto the wrong (global) scope, so the
// navigation update no longer reaches them.
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
