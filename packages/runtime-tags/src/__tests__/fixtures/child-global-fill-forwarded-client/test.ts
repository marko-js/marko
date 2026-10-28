import type { TestConfig } from "../../main.test";
const click = (d: Document) => d.querySelector("button")!.click();
const g = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });

// patch-child-global-fill-forwarded-client without patches.
export const config: TestConfig = {
  // A client render takes no `$global` change; the server renders each.
  equivalent: false,
  steps: [g("a"), click, g("b"), g("c")],
};
