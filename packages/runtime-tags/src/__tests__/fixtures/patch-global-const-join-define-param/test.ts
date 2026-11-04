import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};
const globals = (flag: boolean, name: string) => ({
  $global: { flag, user: { name }, serializedGlobals: ["flag", "user"] },
});

// A `<define>` body's `<const>` of a `$global` value joins a param its call passes
// client state: a patch changing the key re-runs the join.
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
