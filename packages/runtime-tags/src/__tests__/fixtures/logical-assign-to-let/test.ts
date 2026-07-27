import type { TestConfig } from "../../main.test";

const click = (id: string) => (document: Document) =>
  (document.querySelector(`#${id}`) as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [{}, click("or"), click("and"), click("nullish")],
};
