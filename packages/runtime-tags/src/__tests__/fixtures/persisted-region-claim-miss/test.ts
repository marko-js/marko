import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const banner = (document: Document) =>
  document.querySelector(".banner")?.textContent;

// A fill that references a region the client does not hold (here: the frame
// is stripped in transit, standing in for any server/client possession skew)
// must surface through the transport's failure sink for document fallback —
// never settle silently without the range.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { banner: true, $global: { persisted: true } },
    navigate(
      { banner: true, $global: { persisted: true } },
      {
        mutateFrames(frames: string[]) {
          return frames.map((frame) => frame.replace(/\[0,";[^\]]*\],?/g, ""));
        },
      },
    ),
    // The stripped region never applied; the page above it stays live.
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.bump")!.click(),
    (document: Document) =>
      assert.equal(document.querySelector("button.bump")?.textContent, "2"),
    (document: Document) =>
      assert.equal(banner(document), "system maintenance at midnight"),
  ],
};
