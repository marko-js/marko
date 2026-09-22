import { equal } from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

export const config: TestConfig = {
  patches: true,
  steps: [
    { details: false, $global: { page: 1, total: 9 } },
    wait,
    next,
    { details: false, $global: { page: 2, total: 2 } },
    last,
    { details: false, $global: { page: 2, total: 9 } },
    next,
    { details: true, $global: { page: 2, total: 9 } },
    navigate(() => ({
      details: false,
      $global: { page: 1, total: resolveAfter(9, 10) },
    })),
    wait,
    next,
    { details: true, $global: { page: 1, total: 9 } },
    { details: false, $global: { page: 1, total: 9 } },
    wait,
    next,
  ],
};

function next(document: Document) {
  equal(document.querySelector("a")?.textContent, "Next");
  equal(
    document.querySelector(".summary")?.textContent,
    `${document.querySelector("span")?.textContent} of 9`,
  );
}

function last(document: Document) {
  equal(document.querySelector("a"), null);
  equal(document.querySelector(".summary")?.textContent, "Page 2 of 2");
  equal(document.querySelector(".summary + span")?.textContent, "Last page");
}
