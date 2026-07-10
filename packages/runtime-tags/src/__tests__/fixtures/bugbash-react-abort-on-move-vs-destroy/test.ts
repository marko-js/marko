import type { TestConfig } from "../../main.test";

function check(expected: string) {
  return (container: Element) => {
    const actual = container.querySelector(".sink")!.textContent;
    if (actual !== expected) {
      throw new Error(`log mismatch: expected [${expected}] got [${actual}]`);
    }
  };
}

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

export const config: TestConfig = {
  steps: [
    {},
    check("mount x;mount y;mount z;"),
    click("reorder"), // pure moves: no aborts, no remounts
    check("mount x;mount y;mount z;"),
    click("remove"), // x destroyed: exactly one abort
    check("mount x;mount y;mount z;abort x;"),
    click("clear"), // z, y destroyed
    check("mount x;mount y;mount z;abort x;abort z;abort y;"),
  ],
};
