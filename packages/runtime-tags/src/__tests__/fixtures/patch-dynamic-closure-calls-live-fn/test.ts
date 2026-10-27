import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}

// A live function read through a dynamic closure in param-selected structure
// re-renders by its bind, as any value a patch writes would.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a" },
    { a: "b" },
    click(".read"),
    click(".toggle"),
    click(".toggle"),
    { a: "c" },
    click(".read"),
  ],
};
