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

export const config: TestConfig = {
  steps: [{ value: "Hello" }, type(""), type("World"), type("!")],
};
