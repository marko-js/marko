import type { TestConfig } from "../../main.test";

const click = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button")!.click();

export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "request title", $global: { persisted: true } }, click],
};
