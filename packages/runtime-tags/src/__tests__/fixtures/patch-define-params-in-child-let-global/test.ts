import type { TestConfig } from "../../main.test";

const clear = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` a call renders and a child's `<let>` holds reads a `$global` key no render
// serializes: the call's copy follows a patch; the client's keeps what it rendered, as main's.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { $global: { label: "a" } },
    { $global: { label: "b" } },
    clear,
    { $global: { label: "c" } },
  ],
};
