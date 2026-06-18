import type { TestConfig } from "../../main.test";

// A spread `<option ...{ value: "" }>` must be marked selected when the
// enclosing controlled <select> is bound to "". Previously SSR's `_attrs` used a
// truthy check (`data.value`) and silently dropped the empty-string value, so
// the option rendered unselected on the server while CSR selected it — a
// hydration mismatch.
function select(container: Element, value: string) {
  const el = container.querySelector("select")!;
  const window = el.ownerDocument.defaultView!;
  el.value = value;
  el.dispatchEvent(new window.Event("input", { bubbles: true }));
}

const selectA = (container: Element) => select(container, "a");
const selectEmpty = (container: Element) => select(container, "");

export const config: TestConfig = {
  steps: [{}, selectA, selectEmpty],
};
