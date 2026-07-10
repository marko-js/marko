import type { TestConfig } from "../../main.test";

function check(expected: string) {
  return (container: Element) => {
    const actual = Array.from(
      container.querySelectorAll("#wrap i, #wrap b"),
      (el) => el.textContent,
    ).join(",");
    if (actual !== expected) {
      throw new Error(`mismatch: expected [${expected}] got [${actual}]`);
    }
  };
}

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

export const config: TestConfig = {
  steps: [
    {},
    check("a1,a2,b8,b9"),
    click("empty-a"),
    check("b8,b9"),
    click("refill-a"),
    check("a3,a1,b8,b9"),
    click("empty-both"),
    check(""),
    click("refill-both"),
    check("a7,b5,b6"),
  ],
};
