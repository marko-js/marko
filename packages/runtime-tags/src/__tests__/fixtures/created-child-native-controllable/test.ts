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

// patch-created-child-native-controllable without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, type("ab")],
};
