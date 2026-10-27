import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector("button")!.click();
}

// A row withholds its content instance while another row renders the same
// content: the withheld instance, which the client shows, still fills.
export const config: TestConfig = {
  patches: true,
  steps: [{ note: "a" }, toggle, { note: "b" }],
};
