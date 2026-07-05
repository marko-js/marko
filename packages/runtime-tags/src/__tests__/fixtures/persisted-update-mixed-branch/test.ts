import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickButton = (container: Element) =>
  container.querySelector("button")!.click();

// The real-app conditional shape: branches mixing request-derived holes with
// stateful/interactive content. Mixed branch guards must keep their
// request-derived bits (`1 | <dynamic>`) so update renders still emit the
// branch outcome, branch scope link, and hole values -- while the client's
// state (`count`) survives navigations within the matched branch.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { title: "First", $global: { persisted: true } },
    clickButton,
    navigate({ title: "Second", $global: { persisted: true } }),
    clickButton,
    navigate({ err: true, $global: { persisted: true } }),
    navigate({ title: "Back", $global: { persisted: true } }),
  ],
};
