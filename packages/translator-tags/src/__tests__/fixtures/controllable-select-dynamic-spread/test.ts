export const steps = [{}, selectC];

function selectC(container: Element) {
  const select = container.querySelector(`select`)!;
  const window = select.ownerDocument.defaultView!;
  select.value = "c";
  select.dispatchEvent(new window.Event("input", { bubbles: true }));
}
