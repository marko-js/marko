import type { TestConfig } from "../../main.test";

function click(container: Element) {
  (container.querySelector("button") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [
    {
      $global: { count: 0 },
    },
    click,
    click,
    click,
  ],
};
