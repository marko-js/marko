import type { TestConfig } from "../../main.test";

const click = (id: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(`#${id}`)!.click();

// Each const is declared after the one calling it, so every call routes through
// a hoisted accessor; the arguments must survive that indirection.
export const config: TestConfig = {
  steps: [
    {},
    click("direct"),
    click("alias"),
    click("nullary"),
    click("defaulted"),
  ],
};
