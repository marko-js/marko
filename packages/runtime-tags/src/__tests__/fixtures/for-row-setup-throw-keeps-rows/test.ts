import type { TestConfig } from "../../main.test";
import { throws } from "../../utils/resolve";

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLElement>(selector)!.click();
  };
}

// A new row whose setup throws, with no `<try>`, leaves the loop owning the
// rows it rendered before, so the next update replaces them.
export const config: TestConfig = {
  equivalent: false,
  skip_optimize: true,
  steps: [{}, throws(click("button.bad")), click("button.next")],
};
