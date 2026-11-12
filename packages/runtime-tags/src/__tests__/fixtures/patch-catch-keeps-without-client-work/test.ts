import type { TestConfig } from "../../main.test";

const page = (label: string, late?: true) => ({
  label,
  late,
  $global: { label, serializedGlobals: ["label"] },
});

// The `@catch`es of a child with no client work, of a try the document caught and of one a
// patch catches, whose caller passes no client state: no module loads, so each keeps its render.
export const config: TestConfig = {
  patches: true,
  // A kept catch shows what a fresh render of a later step does not.
  skip_fresh_render: true,
  steps: [page("a"), page("b", true), page("c", true)],
};
