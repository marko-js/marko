import type { TestConfig } from "../../main.test";

function check(expected: string) {
  return (container: Element) => {
    const actual = Array.from(
      container.querySelectorAll("#grid span"),
      (el) => el.textContent,
    ).join(",");
    if (actual !== expected) {
      throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
    }
  };
}

export const config: TestConfig = {
  steps: [
    {},
    check("a1.0,a2.0,a3.0,b4.0,b5.0"),
    (container) => {
      // reorder outer rows, reorder/insert/remove inner cells, bump count — one batch
      container.querySelector<HTMLButtonElement>("#both")!.click();
    },
    check("b5.1,b6.1,b4.1,a3.1,a1.1"),
    (container) => {
      container.querySelector<HTMLButtonElement>("#count")!.click();
    },
    check("b5.2,b6.2,b4.2,a3.2,a1.2"),
  ],
};
