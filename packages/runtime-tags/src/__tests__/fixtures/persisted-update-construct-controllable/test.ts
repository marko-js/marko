import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();

const type = (value: string) => (document: Document) => {
  const input = document.querySelector<HTMLInputElement>("input.field")!;
  const window = input.ownerDocument.defaultView!;
  input.value = value;
  input.dispatchEvent(new window.Event("input", { bubbles: true }));
};

// A `value:=` controllable inside a constructed subtree must ride the
// serialized scope data; without it the resumed input has no handler.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { persisted: true, view: "home" } },
    clickCount,
    // Cross-route hop: the editor (input included) constructs from its wire shell.
    navigate({
      $global: { persisted: true, persistedCrossRoute: true, view: "editor" },
    }),
    type("revised"),
    type("final"),
  ],
};
