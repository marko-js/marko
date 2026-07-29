import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

// Native `content=` whose renderer the client cannot construct (the wire
// shell is stripped and the renderer id rewritten in transit, standing in
// for a held-shell overclaim or deploy skew): construction is required, so
// the apply must surface through the failure sink for document fallback —
// never settle with an empty host.
export const config: TestConfig = {
  persisted: true,
  // The miss only exists in SSR transport; a CSR update renders the panel.
  skip_csr: true,
  equivalent: false,
  steps: [
    { show: false, $global: { persisted: true } },
    navigate(
      { show: true, $global: { persisted: true } },
      {
        mutateFrames(frames: string[]) {
          // Panel's content section is the shell whose template renders the
          // hit button; rewrite every reference to an id nothing registers.
          const shell = frames.join("\n").match(/\[0,"([^;"][^"]*)","[^"]*hit/);
          assert.ok(shell, "expected Panel's wire shell in the patch");
          const id = shell![1];
          return frames.map((frame) =>
            frame
              .replace(/\[0,"[^;"][^"]*","[^]*?"\],?/g, "")
              .replaceAll(`"${id}"`, `"${id}__gone"`),
          );
        },
      },
    ),
    // The failed construction fell to the transport sink; the live page
    // above it never corrupted.
    (document: Document) =>
      assert.equal(document.querySelector("div.host")?.textContent || "", ""),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button.count")!.click(),
    (document: Document) =>
      assert.equal(
        document.querySelector("button.count")?.textContent,
        "clicked 1",
      ),
  ],
};
