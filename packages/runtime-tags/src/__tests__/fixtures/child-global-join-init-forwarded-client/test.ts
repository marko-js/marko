import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button.n")!.click();
const g = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });

// patch-child-global-join-init-forwarded-client without patches.
export const config: TestConfig = {
  // A client render takes no `$global` change; the server renders each.
  equivalent: false,
  steps: [g("x"), click, g("y"), click, g("z")],
};
