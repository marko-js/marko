import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

export const config: TestConfig = {
  steps: [
    {},
    // advancing id re-runs the script (abort of the previous, then open)
    click("next"),
    // hide -> the script's $signal aborts (cleanup) with preserved id
    click("toggle"),
    // show -> the script re-runs (re-open) with the preserved id
    click("toggle"),
  ],
};
