import type { TestConfig } from "../../main.test";

const page = (label: string, late?: true) => ({
  label,
  late,
  $global: { label, serializedGlobals: ["label"] },
});

// The `@catch`es of a child with no client work, one the document caught and one a patch
// creates, whose caller passes no client state either: no module of the page loads, so
// each keeps what it rendered, as a page does.
export const config: TestConfig = {
  patches: true,
  // A kept catch shows what a fresh render of a later step does not.
  skip_fresh_render: true,
  steps: [page("a"), page("b", true), page("c", true)],
};
