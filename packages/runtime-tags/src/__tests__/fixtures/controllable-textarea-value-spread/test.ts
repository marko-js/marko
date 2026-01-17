export const steps = [{}, type("w"), type("wor"), type("world")];

function type(value: string) {
  return (container: Element) => {
    const textarea = container.querySelector("textarea")!;
    const window = textarea.ownerDocument.defaultView!;
    textarea.value = value;
    textarea.dispatchEvent(new window.Event("input", { bubbles: true }));
  };
}
