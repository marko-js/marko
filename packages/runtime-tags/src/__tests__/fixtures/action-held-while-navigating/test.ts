import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function pageshow(document: Document, persisted: boolean) {
  const { defaultView } = document;
  defaultView!.dispatchEvent(
    new defaultView!.PageTransitionEvent("pageshow", { persisted }),
  );
}

// A click that navigates holds its act until unload; only a page restored from
// the back/forward cache (`persisted`, simulated here) ends it.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => document.querySelector("a")!.click(),
    wait,
    (document: Document) => pageshow(document, false),
    wait,
    (document: Document) => pageshow(document, true),
    wait,
  ],
};
