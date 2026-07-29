import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

// Native `content=` inside a membrane-live constructed branch, both target
// classes: the live Panel constructs from its wire shell (and stays
// interactive), the nucleus-free Badge arrives as captured region markup.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    clickCount,
    navigate({ show: true, $global: { persisted: true } }),
    (document: Document) => {
      assert.equal(
        document.querySelector("div.host button.hit")?.textContent,
        "hits 0",
      );
      assert.equal(
        document.querySelector("div.aside span.badge")?.textContent,
        "badge",
      );
      assert.equal(document.querySelector("button.tap")?.textContent, "tap 0");
    },
    click("button.hit"),
    click("button.tap"),
    (document: Document) => {
      assert.equal(
        document.querySelector("div.host button.hit")?.textContent,
        "hits 1",
      );
      assert.equal(document.querySelector("button.tap")?.textContent, "tap 1");
    },
  ],
};
