import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// Both options are keyed by `id`, so swapping their values reuses the nodes and
// only writes `value`: the child list never changes, and a constant controlled
// value gives either select no signal to re-run. Each keeps showing the option
// that held the selection before the swap. Re-asserting must also not read as a
// user edit, or `valueChange` reports a value nobody picked.
const selectedValues = (el: HTMLSelectElement) =>
  Array.from(el.selectedOptions, (opt) => opt.value).join(",");

const checkSelection = (document: Document) => {
  const [single, multiple] = document.querySelectorAll("select");
  const span = document.querySelector("span")!;
  assert.ok(
    single.value === "b",
    `select showed ${JSON.stringify(single.value)} after its options swapped values, expected "b"`,
  );
  assert.ok(
    selectedValues(multiple) === "b",
    `multiple select showed ${JSON.stringify(selectedValues(multiple))} after its options swapped values, expected "b"`,
  );
  assert.ok(
    span.textContent === "0",
    `valueChange ran ${span.textContent} times for a swap the user never made, expected 0`,
  );
};

export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      options: [
        { id: 1, value: "a" },
        { id: 2, value: "b" },
      ],
    },
    {
      options: [
        { id: 1, value: "b" },
        { id: 2, value: "a" },
      ],
    },
    wait,
    checkSelection,
  ],
};
