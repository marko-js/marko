import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const item = (container: Element) =>
  container.querySelector<HTMLButtonElement>(
    'button[data-key="parent-beta-marker:shared-item"]',
  )!;
let watchedNode: HTMLButtonElement;
const clickWatch = (container: Element) => {
  watchedNode = item(container);
  watchedNode.click();
};
const assertWatching = (container: Element) => {
  assert.strictEqual(item(container), watchedNode);
  assert.equal(item(container).textContent, "watching");
};
const capHave = {
  mutateHave(have: string) {
    const encoded = have.replace(
      /[-￿]/g,
      (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"),
    );
    assert.ok(encoded.includes("parent-beta-marker"));
    for (const marker of ["parent-alpha-marker", "parent-beta-marker"]) {
      const first = encoded.indexOf(marker);
      assert.equal(encoded.indexOf(marker, first + 1), -1);
    }
    assert.ok(encoded.length <= 256, `have length: ${encoded.length}`);
    return encoded.length > 4096 ? "" : encoded;
  },
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, filter: "All" } },
    clickWatch,
    navigate({ $global: { persisted: true, filter: "Beta" } }, capHave),
    assertWatching,
    navigate({ $global: { persisted: true, filter: "All" } }, capHave),
    assertWatching,
  ],
};
