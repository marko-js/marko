import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// Effects inside nested control flow are torn down on hide and re-mounted on
// every reveal, not just the first cycle; the nested condition also keeps
// responding after a hide/show cycle.
export const config: TestConfig = {
  steps: [
    {},
    click("toggle"),
    click("toggle"),
    click("toggle"),
    click("toggle"),
    click("inner"),
    click("inner"),
  ],
};
