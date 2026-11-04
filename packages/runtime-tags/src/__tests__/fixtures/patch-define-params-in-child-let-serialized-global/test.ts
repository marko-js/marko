import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

const page = (label: string) => ({
  $global: { label, serializedGlobals: { label: true } },
});

// A `<define>` with params a child keeps in its `<let>` reads a serialized `$global`:
// the client renders that copy, which follows a `$global` patch while it shows.
export const config: TestConfig = {
  patches: true,
  steps: [page("a"), page("b"), clear, page("c")],
};
