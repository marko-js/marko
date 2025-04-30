export const steps = [{ value: "Hello" }, type(""), type("World"), type("!")];

function type(value: string) {
  return (container: Element) => {
    const input = container.querySelector("input")!;
    input.value = value;
    input.dispatchEvent(
      new input.ownerDocument.defaultView!.Event("input", { bubbles: true }),
    );
  };
}
