import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const page = (label: string, late?: true) => ({
  label,
  late,
  $global: { label, serializedGlobals: ["label"] },
});

// The `@catch`es of a child with no client work, of a try the document caught and of one a
// patch catches, whose caller passes client state: the module loads, so both follow patches.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b", true), click, page("c", true)],
};
