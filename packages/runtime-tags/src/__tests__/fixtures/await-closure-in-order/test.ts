import type { TestConfig } from "../../main.test";
import { after, flush } from "../../utils/resolve";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {},
    after(1),
    click,
    after(2),
    click,
    after(3),
    flush,
    after(5),
    click,
  ],
};
