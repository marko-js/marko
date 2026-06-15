import type { TestConfig } from "../../main.test";

function click(id: string) {
  return (container: Element) => {
    container.querySelector<HTMLButtonElement>(`#${id}`)!.click();
  };
}

export const config: TestConfig = {
  steps: [{}, click("c"), click("a"), click("b")],
};
