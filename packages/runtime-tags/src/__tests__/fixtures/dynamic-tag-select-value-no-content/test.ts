import type { TestConfig } from "../../main.test";

function addSelectedOption(document: Document) {
  const select = document.querySelector("select")!;
  const option = document.createElement("option");
  option.value = "x";
  option.selected = true;
  select.append(option);
}

// The controlled scope has to reach the client even with no body, or the
// observer that routes an externally inserted option through `valueChange`
// is never installed and `v` never updates.
export const config: TestConfig = {
  steps: [{ tag: "select" }, addSelectedOption],
};
