import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

function type(value: string) {
  return (document: Document) => {
    const input = document.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}

// The inline handler captures state, so it is the client's: the patch ships
// no bind entry for it (the merged control's value alone decides nothing).
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: true },
    click,
    navigate(() => ({ show: true })),
    type("z"),
  ],
};
