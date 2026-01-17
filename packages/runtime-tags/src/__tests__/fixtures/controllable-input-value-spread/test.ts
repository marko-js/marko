export const steps = [{}, type("w"), type("wor"), type("world")];

function type(value: string) {
  return (container: Element) => {
    const input = container.querySelector("input")!;
    const window = input.ownerDocument.defaultView!;
    input.value = value;
    input.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}
