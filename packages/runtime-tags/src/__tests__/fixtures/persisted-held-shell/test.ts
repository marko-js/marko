import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const count = (document: Document) =>
  document.querySelector("button.child")?.textContent;

// A shell the client provably holds (its chunk registered the section's
// values-free renderer) ships no wire entry: the patch carries fills only,
// and the branch still constructs into a live, interactive scope.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate(
      { show: true, $global: { persisted: true, persistedHeldShells: true } },
      {
        mutateFrames(frames) {
          for (const frame of frames) {
            // A wire shell serializes as `[0,"<id>","<template>","<walks>"]`;
            // only `;`-prefixed per-response region ids may ship markup.
            assert.doesNotMatch(
              frame,
              /\[0,"[^;][^"]*","/,
              "a held shell shipped a wire entry",
            );
          }
          return frames;
        },
      },
    ),
    (document: Document) => assert.equal(count(document), "1"),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.child")!.click(),
    (document: Document) => assert.equal(count(document), "2"),
  ],
};
