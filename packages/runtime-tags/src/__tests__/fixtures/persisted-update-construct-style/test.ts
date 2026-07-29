import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const click = (selector: string) => (document: Document) =>
  document.querySelector<HTMLButtonElement>(selector)!.click();

// A dynamic `<style>` inside a freshly constructed live branch: the
// construct pass must initialize the scoped stylesheet (`_style_shell`)
// and deliver both rule items — the server-only tint off the wire
// (capture) and the `<let>`-read padding from the adopted value (fill) —
// and the padding must stay reactive afterwards.
const assertStyle = (...decls: string[]) => {
  return (document: Document) => {
    const style = document.querySelector<HTMLStyleElement>("style")!;
    assert.ok(style.className, "style has its scoped class");
    for (const decl of decls) {
      assert.ok(
        style.textContent!.includes(decl),
        `style contains ${decl} (got: ${style.textContent})`,
      );
    }
  };
};

export const config: TestConfig = {
  persisted: true,
  // The tint genuinely cannot run in the browser, so a plain client render
  // of this template is impossible by design.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "panel" } },
    assertStyle(":teal;", ":4px;"),
    clickCount,
    navigate({ $global: { persisted: true, view: "about" } }),
    navigate({ $global: { persisted: true, view: "panel" } }),
    assertStyle(":teal;", ":4px;"),
    click("button.grow"),
    assertStyle(":teal;", ":8px;"),
  ],
};
