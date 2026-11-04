import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) => {
  document.querySelector<HTMLButtonElement>(selector)!.click();
};
const o = (x: string, y: number) => ({
  $global: { o: { x, y }, serializedGlobals: ["o"] },
});

// A nested `$global` member a loop's rows read in stateful structure: its
// owner subscribes once, and only a change to that member reaches the rows.
export const config: TestConfig = {
  patches: true,
  steps: [
    o("a", 1),
    click("button.inc"),
    click("button.inc"),
    o("b", 1),
    o("b", 2),
    click("button.dec"),
  ],
};
