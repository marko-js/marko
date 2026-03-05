import type { TestConfig } from "../../main.test";

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")?.click();
}

export const config: TestConfig = {
  skip_ssr: true,
  steps: [{}, increment, toggle, increment, toggle],
};
