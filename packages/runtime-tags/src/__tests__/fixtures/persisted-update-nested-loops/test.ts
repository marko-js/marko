import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.bump")!.click();

// The nesting variants of the stable-branch-set shape (see
// persisted-update-static-loop): the request-derived value reaches the
// branch through a NON-IMMEDIATE closure (a root-level $global-derived
// const read two sections down), which compiles to a subscription set --
// update renders never invoke those, so the branch must participate in
// update renders (branch lists + content-merge dispatch) and every
// enclosing branch with it. Pinned shapes: a nav sidebar's active link in
// nested loops (docs example), and a chip row inside a render-once `<if>`
// (dashboard example). Client state (`count`) survives throughout.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    {
      $global: {
        persisted: true,
        params: { path: "intro", region: "na" },
        serializedGlobals: { params: true },
      },
    },
    clickButton,
    navigate({
      $global: {
        persisted: true,
        params: { path: "routing", region: "na" },
        serializedGlobals: { params: true },
      },
    }),
    clickButton,
    navigate({
      $global: {
        persisted: true,
        params: { path: "routing", region: "eu" },
        serializedGlobals: { params: true },
      },
    }),
  ],
};
