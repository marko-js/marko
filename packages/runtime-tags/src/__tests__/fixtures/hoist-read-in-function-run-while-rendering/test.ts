import type { TestConfig } from "../../main.test";

const click = (name: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(`.${name}`)!.click();

export const config: TestConfig = {
  steps: [{}, click("got"), click("direct")],
};
