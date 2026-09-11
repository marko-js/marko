import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The app shape with a page deriving from an unserialized global: a patch
// onto the same page re-feeds the derived value, and a return to a loaded
// page constructs it from the flush again, never from a client re-run.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { page: 0, $global: { search: ["", false] } },
    wait,
    { page: 1, $global: { search: ["a", false] } },
    wait,
    click(".b"),
    { page: 1, $global: { search: ["b", true] } },
    click(".b"),
    { page: 0, $global: { search: ["", false] } },
    wait,
    { page: 1, $global: { search: ["c", false] } },
    wait,
    click(".b"),
  ],
};

function click(selector: string) {
  return (document: Document) => {
    document.querySelector<HTMLButtonElement>(selector)!.click();
  };
}
