import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

export const config: TestConfig = {
  steps: [
    {},
    // mutate inner state, then hide (onDestroy sees preserved count) ...
    click("inc"),
    click("inc"),
    click("toggle"),
    // ... and show again: onMount re-runs, count is still 2
    click("toggle"),
    click("inc"),
  ],
};
