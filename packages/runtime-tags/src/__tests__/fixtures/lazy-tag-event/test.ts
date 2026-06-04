import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, clickBody, wait],
  equivalent: false,
};

function clickBody(container: Element) {
  container.ownerDocument.body.click();
}
