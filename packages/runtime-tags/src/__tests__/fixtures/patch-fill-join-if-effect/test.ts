import type { TestConfig } from "../../main.test";

function click(sel: string) {
  return (document: Document) =>
    document.querySelector<HTMLElement>(sel)!.click();
}

// The closures keep an unpatched join key beside the declaration's fill, so the
// effect in the patch-written branch must re-run by its closure's registration.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", on: true },
    click("button.s"),
    click("button.s"),
    { a: "y", on: true },
    { a: "z", on: true },
  ],
};
