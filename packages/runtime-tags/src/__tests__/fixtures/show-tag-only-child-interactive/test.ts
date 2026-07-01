import type { TestConfig } from "../../main.test";

const click = (id: string) => (container: Element) =>
  container.querySelector<HTMLButtonElement>(`#${id}`)!.click();

export const config: TestConfig = {
  steps: [
    {},
    click("inc"),
    // Hide, then restore; the counter's state and listeners persist.
    click("toggle"),
    click("toggle"),
    click("inc"),
  ],
};
