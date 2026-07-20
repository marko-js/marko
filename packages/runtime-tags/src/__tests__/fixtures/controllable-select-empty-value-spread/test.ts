import type { TestConfig } from "../../main.test";

// A spread `<option ...{ value: "" }>` must be marked selected when the
// enclosing controlled <select> is bound to "". Previously SSR's `_attrs` used a
// truthy check (`data.value`) and silently dropped the empty-string value, so
// the option rendered unselected on the server while CSR selected it — an
// SSR/CSR mismatch.
function select(document: Document, value: string) {
  const el = document.querySelector("select")!;
  const window = el.ownerDocument.defaultView!;
  el.value = value;
  el.dispatchEvent(new window.Event("input", { bubbles: true }));
}

const selectA = (document: Document) => select(document, "a");
const selectEmpty = (document: Document) => select(document, "");

export const config: TestConfig = {
  steps: [{}, selectA, selectEmpty],
};
