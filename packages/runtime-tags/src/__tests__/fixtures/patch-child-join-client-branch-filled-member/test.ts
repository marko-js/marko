import type { TestConfig } from "../../main.test";
const click = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.n")!.click();
// A written join's member a script also reads: where the server renders the
// branch, its fill refreshes the script and leaves the join alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "p", show: true },
    click,
    { a: "y", b: "q", show: true },
    click,
    { a: "z", b: "r", show: true },
  ],
};
