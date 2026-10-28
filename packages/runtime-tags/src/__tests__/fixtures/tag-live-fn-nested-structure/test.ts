import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}

// patch-tag-live-fn-nested-structure without patches.
export const config: TestConfig = {
  equivalent: false,
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
