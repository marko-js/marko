import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}

// A tag's value read in branches two inputs pick: its closure re-runs where the
// caller's state owns the inner one, which a patch sends no node for.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a", x: true },
    { a: "b", x: true },
    click(".read"),
    click(".toggle"),
    click(".toggle"),
    { a: "c", x: true },
    click(".read"),
  ],
};
