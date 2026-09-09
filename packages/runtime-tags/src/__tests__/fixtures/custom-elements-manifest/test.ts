import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  embedded: true,
  steps: [
    {},
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      const Badge = document.defaultView!.customElements.get("probe-badge")!;
      assert.ok(badge instanceof Badge);
      assert.equal(badge.getAttribute("label"), "Likes");
      assert.equal(badge.getAttribute("count"), "0");
      assert.equal(badge.hasAttribute("disabled"), false);
      assert.equal(badge.textContent, "Likes on this post");
      assert.equal(
        badge.shadowRoot!.querySelector("button")!.textContent,
        "Likes: 0",
      );
      assert.equal(badge.shadowRoot!.querySelector("button")!.disabled, false);
      assert.deepEqual(
        badge.shadowRoot!.querySelector("slot")!.assignedNodes(),
        [badge.querySelector("span")],
      );
      badge.shadowRoot!.querySelector("button")!.click();
    },
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      assert.equal(document.querySelector("output")!.textContent, "1");
      assert.equal(badge.getAttribute("count"), "1");
      assert.equal(
        badge.shadowRoot!.querySelector("button")!.textContent,
        "Likes: 1",
      );
      document.querySelector<HTMLButtonElement>("#reset")!.click();
    },
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      assert.equal(document.querySelector("output")!.textContent, "5");
      assert.equal(badge.getAttribute("label"), "Votes");
      assert.equal(badge.getAttribute("count"), "5");
      assert.equal(badge.textContent, "Votes on this post");
      assert.equal(
        badge.shadowRoot!.querySelector("button")!.textContent,
        "Votes: 5",
      );
      document.querySelector<HTMLButtonElement>("#toggle")!.click();
    },
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      const button = badge.shadowRoot!.querySelector("button")!;
      assert.equal(badge.hasAttribute("disabled"), true);
      assert.equal(button.disabled, true);
      button.click();
    },
    (document: Document) => {
      assert.equal(document.querySelector("output")!.textContent, "5");
      document.querySelector<HTMLButtonElement>("#toggle")!.click();
    },
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      const button = badge.shadowRoot!.querySelector("button")!;
      assert.equal(badge.hasAttribute("disabled"), false);
      assert.equal(button.disabled, false);
      button.click();
    },
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      assert.equal(document.querySelector("output")!.textContent, "6");
      assert.equal(
        badge.shadowRoot!.querySelector("button")!.textContent,
        "Votes: 6",
      );
      const parent = badge.parentNode!;
      const next = badge.nextSibling;
      badge.remove();
      let changes = 0;
      badge.addEventListener("count-change", () => changes++);
      badge.shadowRoot!.querySelector("button")!.click();
      assert.equal(changes, 0);
      parent.insertBefore(badge, next);
      badge.shadowRoot!.querySelector("button")!.click();
      assert.equal(changes, 1);
    },
    (document: Document) => {
      const badge = document.querySelector("probe-badge")!;
      assert.equal(document.querySelector("output")!.textContent, "7");
      assert.equal(badge.getAttribute("count"), "7");
      assert.equal(
        badge.shadowRoot!.querySelector("button")!.textContent,
        "Votes: 7",
      );
    },
  ],
};
