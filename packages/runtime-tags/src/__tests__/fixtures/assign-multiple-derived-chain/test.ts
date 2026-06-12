import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click("#update"), click("#reselect")],
};

function click(selector: string) {
  return (container: Element) => {
    container.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
