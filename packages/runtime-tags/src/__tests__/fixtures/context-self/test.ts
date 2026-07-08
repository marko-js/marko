import type { TestConfig } from "../../main.test";

function toggle(label: string) {
  return (container: Element) =>
    container
      .querySelector<HTMLButtonElement>(`button.toggle-${label}`)!
      .click();
}

export const config: TestConfig = {
  steps: [{}, toggle("outer"), toggle("outer")],
};
