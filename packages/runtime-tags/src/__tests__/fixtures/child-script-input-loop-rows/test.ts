import type { TestConfig } from "../../main.test";

const click = (selector: string) => (d: Document) =>
  d.querySelector<HTMLButtonElement>(selector)!.click();

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { a: "x", b: "m" },
    click("button.l"),
    { a: "x", b: "n" },
    { a: "y", b: "n" },
  ],
};
