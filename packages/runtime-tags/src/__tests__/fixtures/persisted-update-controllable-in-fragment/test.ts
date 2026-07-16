import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (container: Element) =>
  container.querySelector<HTMLButtonElement>("button.count")!.click();

const type = (value: string) => (container: Element) => {
  const input = container.querySelector<HTMLInputElement>("input.field")!;
  const window = input.ownerDocument.defaultView!;
  input.value = value;
  input.dispatchEvent(new window.Event("input", { bubbles: true }));
};

// A `value:=` controllable inside a fragment-delivered subtree must ride the
// serialized scope data; without it the resumed input has no handler.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Cross-route hop: the editor (input included) arrives as a fragment.
    navigate({
      $global: { persisted: true, persistedCrossRoute: true, view: "editor" },
    }),
    type("revised"),
    type("final"),
  ],
};
