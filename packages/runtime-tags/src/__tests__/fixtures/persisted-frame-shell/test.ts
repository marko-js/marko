import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

// The document frame is patch-stable: no client path constructs it, so its
// markup and shell registration stay out of the persisted chunk while the
// nested branch keeps its own shell.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_csr: true,
  dom_bundle_excludes: ["<html", "<head", "<body"],
  steps: [
    { show: false, $global: { persisted: true, search: [{ q: "a" }] } },
    clickCount,
    navigate({
      show: true,
      $global: { persisted: true, search: [{ q: "b" }] },
    }),
    clickCount,
  ],
};
