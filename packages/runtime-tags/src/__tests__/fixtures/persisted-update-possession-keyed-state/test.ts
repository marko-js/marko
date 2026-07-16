import assert from "assert";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const item = (container: Element) =>
  container.querySelector<HTMLButtonElement>('button[data-id="1"]')!;
let watchedNode: HTMLButtonElement;
const clickWatch = (container: Element) => {
  watchedNode = item(container);
  watchedNode.click();
};
let haveLength = 0;
const assertWatching = (container: Element) => {
  assert.strictEqual(item(container), watchedNode);
  assert.equal(item(container).textContent, "watching");
  assert.ok(haveLength <= 256, `have length: ${haveLength}`);
};
const capHave = {
  mutateHave(have: string) {
    const encoded = have.replace(
      /[-￿]/g,
      (c) => "\\u" + c.charCodeAt(0).toString(16).padStart(4, "0"),
    );
    haveLength = encoded.length;
    return haveLength > 4096 ? "" : encoded;
  },
};

export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, filter: "All" } },
    clickWatch,
    navigate({ $global: { persisted: true, filter: "Toys & Games" } }, capHave),
    assertWatching,
    navigate({ $global: { persisted: true, filter: "All" } }, capHave),
    assertWatching,
  ],
};
