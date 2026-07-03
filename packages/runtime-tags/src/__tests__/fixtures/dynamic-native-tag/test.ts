import type { TestConfig } from "../../main.test";

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}

export const config: TestConfig = {
  steps: [{ label: "Home", href: "/home" }, toggle, toggle],
};
