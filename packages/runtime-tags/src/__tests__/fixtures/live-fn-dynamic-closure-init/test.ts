import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}

// patch-live-fn-dynamic-closure-init without patches.
export const config: TestConfig = {
  equivalent: false,
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
