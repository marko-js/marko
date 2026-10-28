import type { TestConfig } from "../../main.test";

// A join the page passes a known child, which renders it in its own client branch:
// the child keeps its input, so the patch writes the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "x", b: "1" },
    { a: "y", b: "2" },
    click("button"),
    click("button"),
    { a: "z", b: "3" },
  ],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
