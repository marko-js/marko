import type { TestConfig } from "../../main.test";

// A patch creates a child whose controlled value's change handler is the
// parent's bound registration. The server sends it as a bound fill (`BindFill`),
// which applies through the `Value` patcher, but neither template links
// `patches/fill`: the patch rejects with "fills[Value] is not a function"
// (found while reducing the marko-chat failure).
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, type],
};

function type(document: Document) {
  const area = document.querySelector("textarea")!;
  area.value = "hi";
  area.dispatchEvent(
    new document.defaultView!.Event("input", { bubbles: true }),
  );
}
