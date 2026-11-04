import type { TestConfig } from "../../main.test";

const page = (label: string, late?: true) => ({
  n: 2,
  late,
  $global: { label, serializedGlobals: ["label"] },
});

// A `@catch` a patch creates renders a loop whose rows read `$global`: no later patch pairs
// the catch, so the rows follow `$global` by its walk from the catch's scope.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b", true), page("c", true)],
};
