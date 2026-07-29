import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (document: Document) =>
  document.querySelector("button")!.click();

// Branches mixing request-derived holes with stateful content: mixed guards
// keep their request-derived bits while client state survives navigation.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "First", $global: { persisted: true } },
    clickButton,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickButton,
    navigate({ err: true, $global: { persisted: true } }),
    navigate({ title: "Back", $global: { persisted: true } }),
  ],
};
