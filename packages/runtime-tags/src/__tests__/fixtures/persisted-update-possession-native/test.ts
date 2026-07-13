import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

// Possession swaps where one side of the `<${...}/>` hop is a NATIVE tag
// name. The echo already carries the native branch's renderer value (its
// tag-name string rides the same `ConditionalRenderer:` key), and the
// fragment walker already binds native-tag branch ends -- the server's
// native-tag branch routes through the same possession/fragment decision
// as a renderer object, so a same-route swap INTO a plain tag applies as
// a fine-grained fragment instead of failing ("update diverged") into a
// full navigation. Client state above the hop survives every direction.
export const config: TestConfig = {
  persisted: true,
  // The note compute is server-only by design, so a plain client render of
  // either branch is impossible.
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "plain", topic: "sales" } },
    clickCount,
    // Native -> component: the echoed native possession ("blockquote")
    // misses the Widget renderer, shipping a fragment for the hop.
    navigate({ $global: { persisted: true, view: "widget", topic: "sales" } }),
    clickCount,
    // Component -> native: the echoed Widget possession misses the
    // tag-name renderer -- the native branch must take the fragment.
    navigate({ $global: { persisted: true, view: "plain", topic: "growth" } }),
    clickCount,
    // Native -> native (matched): no miss; the content hole fills
    // fine-grained through the ordinary patch.
    navigate({ $global: { persisted: true, view: "plain", topic: "trends" } }),
  ],
};
