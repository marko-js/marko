import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
const globals = (flag: boolean, name: string) => ({
  $global: { flag, user: { name }, serializedGlobals: ["flag", "user"] },
});

// A `$global` value a `<const>` reads (directly, through another, destructured or whole)
// joins a `<let>`: a patch changing the key re-runs the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    globals(true, "a"),
    globals(false, "b"),
    toggle,
    globals(true, "c"),
    toggle,
    globals(false, "d"),
  ],
};
