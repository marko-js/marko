import type { TestConfig } from "../../main.test";

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    input.value = value;
    input.dispatchEvent(
      new input.ownerDocument.defaultView!.Event("input", { bubbles: true }),
    );
  };
}

// A server-created child's controllable `<input>` holds the handler `value:=`
// passes as its change handler only: no holder compares it, so no record ships.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, type("ab")],
};
