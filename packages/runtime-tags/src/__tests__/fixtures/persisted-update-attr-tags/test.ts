import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

export const config: TestConfig = {
  persisted: true,
  dom_bundle_excludes: ["getTitle", "getRows", "server title", "<h2>", "<p>"],
  skip_csr: true,
  equivalent: false,
  steps: [
    { id: 1, show: true, $global: { persisted: true } },
    clickCount,
    navigate({ id: 2, show: false, $global: { persisted: true } }),
    clickCount,
  ],
};
