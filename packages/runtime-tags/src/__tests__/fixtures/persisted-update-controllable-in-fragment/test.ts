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

// A change-handler controllable (`value:=`) inside a fragment-delivered
// subtree. Fragment subtrees are resumes, not fresh client constructions --
// no setup runs against them -- so the controllable's value/handler wiring
// must ride the serialized scope data exactly as in a document render
// (`writeControlledScope` restores the write inside fragment captures, like
// `_var`'s tag-variable wiring). Without it the resumed input has no handler
// and typing never reaches the `<let>`.
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
