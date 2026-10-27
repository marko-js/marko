import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const clickAll = (document: Document) => {
  for (const button of document.querySelectorAll("button")) button.click();
};

// The plain twin of patch-catch-created-define-state: the document renders the
// `@catch`, so its bodies' handlers resume.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a" },
    { error: new Error("SHOWN_x"), label: "b" },
    wait,
    clickAll,
  ],
};
