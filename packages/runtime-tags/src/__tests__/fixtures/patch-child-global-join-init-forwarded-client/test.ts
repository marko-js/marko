import type { TestConfig } from "../../main.test";
const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button.n")!.click();
const g = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });

// A child's join init over a value its caller passes from `$global` and a param
// that caller forwards: the page's state makes the join mix, so the page links init.
export const config: TestConfig = {
  patches: true,
  steps: [g("x"), click, g("y"), click, g("z")],
};
