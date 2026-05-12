import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [
    { value: "hello" },
    wait,
    click,
    wait,
    click,
    wait,
    click,
    wait,
    click,
    wait,
  ],
  skip_equivalent: true,
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
