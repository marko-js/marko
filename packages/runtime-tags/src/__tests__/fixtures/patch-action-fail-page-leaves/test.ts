import type { TestConfig } from "../../main.test";
import { navigate, wait, flushRAF } from "../../utils/resolve";

// A patch that fails before applying makes the router load a document: the act
// stays held until the page leaves.
export const config: TestConfig = {
  patches: true,
  expect_rejection: true,
  stay_on_rejection: true,
  patch_build: "b2",
  steps: [
    { label: "one" },
    navigate({ label: "two" }, undefined, { click: "#go" }),
    wait,
    flushRAF,
    (document: Document) => {
      if (document.querySelector("p")!.textContent !== "pending true") {
        throw new Error("The act ended while the page was leaving.");
      }
    },
  ],
};
