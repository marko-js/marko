import type { TestConfig } from "../../main.test";
import { navigate, wait, flushRAF } from "../../utils/resolve";

// A patch that fails while the browser is leaving (its `beforeunload`) leaves
// the page in place if the user stays: the act ends.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  stay_on_rejection: true,
  patch_build: "b2",
  steps: [
    { label: "one" },
    navigate({ label: "two" }, undefined, { click: "#go", stays: 1 }),
    wait,
    flushRAF,
    (document: Document) => {
      if (document.querySelector("p")!.textContent !== "pending ") {
        throw new Error("The act is still pending on the page that stayed.");
      }
    },
  ],
};
