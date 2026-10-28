import type { TestConfig } from "../../main.test";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}

// A live function read through a dynamic closure in param-selected structure:
// "PatchInit:" ships, but no init patcher is linked (rejects at 807205636c2).
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
