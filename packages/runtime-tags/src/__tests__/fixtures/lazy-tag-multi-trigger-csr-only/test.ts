import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, clickBody, wait, { value: 2 }],
  equivalent: false,
  skip_ssr: true,
};

function clickBody(container: Element) {
  container.ownerDocument.body.click();
}
