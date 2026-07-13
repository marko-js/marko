import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// A `<try>`/`@placeholder`/`<await>` inside a fragment frame whose async
// body contains a DOM-LESS child with only a `<lifecycle>` (`<mounter>`).
// The body arrives as its own boundary-body entry after the fragment ships
// the placeholder; the applier must stamp the entry's serialized scope ids
// so the dom-less mounter gets live identity. Without the stamp the mounter
// scope is never paired, its mount effect is generation-gated out, and the
// parent `ready` state it flips never updates -- `.status` stays "waiting"
// after the fragment resolves instead of "ready".
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    navigate({
      $global: {
        persisted: true,
        persistedFragment: true,
        view: "reports",
        range: "day",
      },
    }),
  ],
};
