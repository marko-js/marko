import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}

// patch-dynamic-closure-calls-live-fn without patches.
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
