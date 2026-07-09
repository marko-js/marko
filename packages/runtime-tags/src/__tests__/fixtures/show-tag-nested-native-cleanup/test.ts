import type { TestConfig } from "../../main.test";

const click = (id: string) => (c: Element) =>
  c.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// A `<lifecycle>` nested inside a native element still belongs to the show's
// scope, so it is cleaned up when hidden and re-mounted when shown.
export const config: TestConfig = {
  steps: [{}, click("toggle"), click("toggle")],
};
