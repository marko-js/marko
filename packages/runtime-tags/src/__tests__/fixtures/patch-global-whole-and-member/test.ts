import type { TestConfig } from "../../main.test";

const g = (title: string) => ({
  $global: { serializedGlobals: { data: true }, data: { title } },
});

// An effect reads `$global` whole while markup reads a member two levels
// down: a patch shipping new globals re-runs the effect and writes the member.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [g("one"), g("two"), g("two")],
};
