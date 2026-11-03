import type { TestConfig } from "../../main.test";
const click = (d: Document) => d.querySelector("button")!.click();
const g = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });

// A child's fill of a value its caller passes from `$global`, which ships where a
// param that caller forwards is the client's: the page's state decides it.
export const config: TestConfig = {
  patches: true,
  steps: [g("a"), click, g("b"), g("c")],
};
