import type { TestConfig } from "../../main.test";

function click(container: Element, number: number) {
  const buttons: HTMLButtonElement[] = Array.from(
    container.querySelectorAll("button"),
  );
  const button = buttons.find((b) => b.textContent === "" + number)!;
  button.click();
}

export const config: TestConfig = {
  steps: [
    {},
    (c: Element) => click(c, 2),
    (c: Element) => click(c, 3),
    (c: Element) => click(c, 5),
  ],
};
