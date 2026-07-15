import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickToggle = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();

// Pairing-integrity matrix, the case that must stay SILENT: a late frame
// whose target subtree a client action destroyed mid-navigation. The
// navigation's first frame applies while the `<try>` boundary is still
// pending; between frames the user toggles the client-owned `<if>` off,
// destroying the try branch (`removeAndDestroyBranch` zeroes its
// generation). The boundary-body frame then arrives addressing the
// destroyed scopes -- and skips without error BY DESIGN: `_update_branch`
// sparse-skips the absent live branch, `applyBoundaryBody`'s generation
// guard drops a destroyed target, and the frame's effect entries are
// generation-gated out with it. The pinned entry for the navigation shows
// the late frame committing nothing; the final toggle proves the page (and
// the client `<let>` the destroyed subtree hung from) keeps working.
export const config: TestConfig = {
  persisted: true,
  // The scenario is inherently about a client mutation racing the frame
  // stream; a csr navigation has no frames to race.
  skip_csr: true,
  equivalent: false,
  steps: [
    { note: "first", tick: 4, $global: { persisted: true } },
    // Deliberately do NOT flush: the placeholder stays shown, so the
    // navigation's echo reports the boundary as still pending and the
    // resolved body is sent as a boundary-body entry in a later frame.
    navigate(
      { note: "second", tick: 7, $global: { persisted: true } },
      {
        // Destroy the boundary's whole subtree between frame 1 and the
        // boundary-body frame.
        betweenFrames: clickToggle,
      },
    ),
    clickToggle,
  ],
};
