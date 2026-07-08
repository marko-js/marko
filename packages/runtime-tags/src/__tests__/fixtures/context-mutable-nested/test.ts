import type { TestConfig } from "../../main.test";

function click(sel: string) {
  return (container: Element) =>
    container.querySelector<HTMLButtonElement>(sel)!.click();
}

export const config: TestConfig = {
  steps: [{}, click(".show-0"), click(".show-1"), click(".change-1")],
};
