import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A branch holding a load-on-render child beside a server-owned spread:
// the spread delivers as the element's attrs, so the frame still
// constructs the branch and the child with it.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, label: "a", attrs: { title: "t" } },
    { show: true, label: "a", attrs: { title: "t" } },
    wait,
    click,
  ],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
