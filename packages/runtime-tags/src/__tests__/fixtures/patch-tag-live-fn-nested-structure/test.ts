import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}

// A tag's function read in branches two inputs pick: its closure re-runs where
// either branch may be the client's (here the inner one, its caller's state).
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
