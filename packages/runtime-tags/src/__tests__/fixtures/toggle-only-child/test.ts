import type { TestConfig } from "../../main.test";

function type(value: string) {
  return (container: Element) => {
    const input = container.querySelector("input")!;
    input.value = value;
    input.dispatchEvent(
      new input.ownerDocument.defaultView!.Event("input", { bubbles: true }),
    );
  };
}

export const config: TestConfig = {
  steps: [{ value: "Hello" }, type(""), type("World"), type("!")],
};
