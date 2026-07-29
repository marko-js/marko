import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const frameText = (document: Document) =>
  document.querySelector("header.frame")?.textContent;

// A branch that splices a frame-elided child composes a shell without the
// child's document markup, so it must never be advertised as held: an
// overclaimed hold has to fail into a document navigation. Constructing
// the sibling while the frame silently vanishes is lost UI.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  skip_csr: true,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate({
      show: true,
      $global: { persisted: true, persistedHeldShells: true },
    }),
    (document: Document) => {
      if (document.querySelector("span.sibling")) {
        assert.equal(
          frameText(document),
          "STATIC FRAME",
          "the constructed branch omitted its child's document frame",
        );
      } else {
        assert.equal(
          frameText(document),
          undefined,
          "a construction that fell back must leave the page untouched",
        );
      }
    },
  ],
};
