import type { TestConfig } from "../../main.test";

const page = (label: string, late?: true) => ({
  label,
  late,
  $global: { label, serializedGlobals: ["label"] },
});

// The `@catch`es of a child with no client work, of a try the document caught and of one a
// patch catches, whose caller passes no client state: their module loads, so both follow fills.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b", true), page("c", true)],
};
