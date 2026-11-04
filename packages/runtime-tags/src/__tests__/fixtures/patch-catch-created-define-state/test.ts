import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const clickAll = (document: Document) => {
  for (const button of document.querySelectorAll("button")) button.click();
};

// The `<define>` bodies a patch-created `@catch` calls (with a lazy child, a
// child, their own state, or through another) keep their click handlers.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a" },
    { error: new Error("SHOWN_x"), label: "b" },
    wait,
    clickAll,
  ],
};
