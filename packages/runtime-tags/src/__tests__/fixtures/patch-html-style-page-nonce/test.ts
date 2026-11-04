import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// No style takes a patch request's nonce; a live spread keeps the document's.
// Created styles get theirs once client renders stamp nonces before connecting.
function documentNonces(document: Document) {
  const nonces = [...document.querySelectorAll("style")].map((style) =>
    style.getAttribute("nonce"),
  );
  assert.deepEqual(nonces.at(-1), "doc");
  assert.ok(!nonces.some((nonce) => nonce?.startsWith("patch")));
}

export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { page: 0, attrs: { "data-x": "0" }, $global: { cspNonce: "doc" } },
    { page: 1, attrs: { "data-x": "1" }, $global: { cspNonce: "patch1" } },
    documentNonces,
    { page: 2, attrs: { "data-x": "2" }, $global: { cspNonce: "patch2" } },
    documentNonces,
  ],
};
