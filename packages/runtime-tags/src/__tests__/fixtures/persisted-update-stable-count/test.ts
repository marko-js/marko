import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Drops the last element of the loop's serialized branch list
// (`[_(2),_(3),_(4)]` -> `[_(2),_(3)]`), so the patch claims a different
// item count than the live page holds. Throws if no list is found so a
// changed serialization cannot turn the corruption into a silent no-op.
const dropLastBranch = (frames: string[]) => {
  const out = frames.map((frame) =>
    frame.replace(/(:\[_\(\d+\)(?:,_\(\d+\))*),_\(\d+\)\]/, "$1]"),
  );
  if (out.join("\n") === frames.join("\n")) {
    throw new Error("mutateFrames: no branch list found");
  }
  return out;
};

// Pairing-integrity failure matrix: a stable `<for>` (a compiler-proven
// render-once branch set -- see persisted-update-static-loop for the
// passing shape) whose patch arrives with a DIFFERENT branch count means
// the stability proof and the wire disagree. `_update_for` must fail
// loudly rather than pair unrelated scopes by position; the router falls
// back to a full document navigation. The throw happens before any item
// merges, so the pinned failure entry carries no Change section, and the
// clicks plus the uncorrupted retry prove the live page survives
// untouched.
export const config: TestConfig = {
  persisted: true,
  // A csr navigation has no frame stream to corrupt.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, pick: "home" } },
    clickCount,
    navigate(
      { $global: { persisted: true, pick: "toys" } },
      { mutateFrames: dropLastBranch, expectError: true },
    ),
    clickCount,
    // Uncorrupted retry: the stable list merges index-paired and the
    // active chip moves.
    navigate({ $global: { persisted: true, pick: "toys" } }),
    clickCount,
  ],
};
