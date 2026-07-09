import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Nested possession echo. The swap hop (`<${...}/>` choosing PanelA/PanelB)
// lives inside `Page`, which is itself delivered through the shell's outer
// `<${input.content}/>` hop -- so the swap hop's owner scope is a dynamic
// branch, one level deeper than the flat `persisted-update-possession-swap`
// case. The echo keys by the build-stable site id (stashed on the hop scope),
// so the inner swap resolves to a fragment while the `<let/count>` button
// state survives, regardless of the owner scope's runtime id.
//
// (This fixture's harness render does not itself drift the scope id -- the
// real document/update divergence needs a full-document layout whose matched
// header scopes elide in the update render, which the marko-ecommerce `/swap`
// demo reproduces and where scope-id keying did fall back to a full nav.)
export const config: TestConfig = {
  persisted: "fragments",
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "a", topic: "sales" } },
    clickCount,
    navigate({ $global: { persisted: true, view: "b", topic: "sales" } }),
    clickCount,
    navigate({ $global: { persisted: true, view: "a", topic: "growth" } }),
  ],
};
