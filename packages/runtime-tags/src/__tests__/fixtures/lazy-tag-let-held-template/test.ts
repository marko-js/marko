import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The server writes `Tag`, which holds the lazy template, so it resumes as the
// template the client loads instead of failing to serialize.
export const config: TestConfig = {
  steps: [{}, wait, click, wait],
  equivalent: false,
  // Lands the child's module after resume in every build, not by load order.
  delay_load: ["child"],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
