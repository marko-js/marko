import type { TestConfig } from "../../main.test";
const click = (document: Document) =>
  document.querySelector<HTMLElement>("button.l")!.click();
// Rows real client state renders join an input a script also reads: one entry
// re-runs the join in each row and refreshes the script.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", items: ["s", "t"] },
    click,
    { a: "y", items: ["u"] },
    { a: "z", items: ["u", "v"] },
  ],
};
