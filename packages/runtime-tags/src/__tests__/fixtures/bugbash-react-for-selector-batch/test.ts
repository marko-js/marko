import type { TestConfig } from "../../main.test";

function check(expected: string) {
  return (container: Element) => {
    const actual = Array.from(
      container.querySelectorAll("#list li"),
      (el) => el.textContent + (el.className === "sel" ? "*" : ""),
    ).join(",");
    if (actual !== expected) {
      throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
    }
  };
}

export const config: TestConfig = {
  steps: [
    {},
    check("a*,b,c,d"),
    (c) => c.querySelector<HTMLButtonElement>("#sel2")!.click(),
    check("a,b*,c,d"), // selector fast path (prevKey cached)
    (c) => c.querySelector<HTMLButtonElement>("#batch")!.click(),
    check("d,c*,a"), // reorder + removed old selection + new selection, one batch
    (c) => c.querySelector<HTMLButtonElement>("#swap")!.click(),
    check("a,c,d*"), // reverse + reselect, one batch
  ],
};
