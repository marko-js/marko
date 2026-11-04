import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// An id after a known child and after a dynamic tag is the same whether or
// not the call renders.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  skip_csr: true,
  steps: () => {
    let first: string[] | undefined;
    const check = (document: Document) => {
      const ids = new Set<string>();
      for (const input of document.querySelectorAll("input")) {
        assert(!ids.has(input.id), "duplicate " + input.id);
        ids.add(input.id);
        assert.equal(input.labels?.length, 1);
      }
      const after = [...document.querySelectorAll("label")]
        .filter(isAfterLabel)
        .map(labelFor);
      assert.equal(new Set(after).size, 2);
      assert.deepEqual(after, (first ??= after));
    };
    return [
      { show: true },
      check,
      { show: false },
      check,
      { show: true },
      check,
    ];
  },
};

function isAfterLabel(label: HTMLLabelElement) {
  return label.textContent!.startsWith("after");
}

function labelFor(label: HTMLLabelElement) {
  return label.htmlFor;
}
