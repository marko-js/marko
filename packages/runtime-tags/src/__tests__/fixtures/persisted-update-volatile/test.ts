import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// Render-once contract: values outside the sanctioned server channels are
// computed at page load and persisted navigations never refresh them.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_csr: true,
  steps: [
    { title: "First", $global: { persisted: true } },
    clickButton,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickButton,
  ],
};
