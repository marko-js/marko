import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const page = (label: string) => ({
  $global: { label, serializedGlobals: { label: true } },
});

// The same, reading the serialized `$global` in a branch its param shows: the
// client renders that copy too.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b"), clear, page("c")],
};
