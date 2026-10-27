import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

function click(document: Document, selector: string, init = {}) {
  const { MouseEvent } = document.defaultView!;
  document
    .querySelector(selector)!
    .dispatchEvent(
      new MouseEvent("click", { bubbles: true, cancelable: true, ...init }),
    );
}

// An event that does not navigate this document ends its act at the end of its task.
export const config: TestConfig = {
  steps: [
    {},
    (document: Document) => click(document, "form button"),
    wait,
    (document: Document) => click(document, "a[href='/a']", { metaKey: true }),
    wait,
    (document: Document) => click(document, "a[target]"),
    wait,
    (document: Document) => click(document, "a[download]"),
    wait,
    (document: Document) => click(document, "a[href='#top']"),
    wait,
    (document: Document) => click(document, "button:not(form button)"),
    wait,
  ],
};
