import type { TestConfig } from "../../main.test";

const click = (selector: string) => (container: Element) =>
  container.querySelector<HTMLElement>(selector)!.click();

export const config: TestConfig = {
  steps: [
    {
      start: 10,
      items: [
        { id: 1, name: "a" },
        { id: 2, name: "b" },
      ],
    },
    click(".row"),
    click("#count"),
    click("#count"),
    click("#label"),
    click("#sum"),
    click(".row"),
  ],
};
