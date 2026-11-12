import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const page = (label: string, late?: true) => ({
  label,
  late,
  $global: { label, serializedGlobals: ["label"] },
});

// The `@catch`es of a child with no client work, one the document caught and one a patch
// creates, whose caller passes client state: the caller's module loads the child's, so
// both follow `$global` and their param.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b", true), click, page("c", true)],
};
