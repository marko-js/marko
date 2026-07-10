import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [
    {
      items: [{ name: "a" }, { name: "b" }, { name: "c" }, { name: "d" }],
    },
    click,
    click,
  ],
};
