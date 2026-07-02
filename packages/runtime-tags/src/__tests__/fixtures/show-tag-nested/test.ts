import type { TestConfig } from "../../main.test";

const click = (id: string) => (container: Element) =>
  container.querySelector<HTMLButtonElement>(`#${id}`)!.click();

export const config: TestConfig = {
  steps: [
    {},
    // Reveal the nested show.
    click("i"),
    // Park the outer show (carrying the shown nested content with it).
    click("o"),
    // Toggle the nested show while its outer range is detached.
    click("i"),
    // Restore the outer show; the nested content stays hidden.
    click("o"),
    // Reveal the nested show again.
    click("i"),
  ],
};
