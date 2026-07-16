import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickToggle = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.toggle")!.click();

// A late frame whose target subtree a client action destroyed mid-navigation
// must skip silently by design, leaving the page fully interactive.
export const config: TestConfig = {
  persisted: true,
  // The scenario is inherently about a client mutation racing the frame
  // stream; a csr navigation has no frames to race.
  skip_csr: true,
  equivalent: false,
  steps: [
    { note: "first", tick: 4, $global: { persisted: true } },
    // Deliberately not flushed: the echo reports the boundary still pending,
    // so the resolved body is sent as a boundary-body entry in a later frame.
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
