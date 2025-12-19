export const steps = [{}, selectLast];

function selectLast(container: Element) {
  const select = container.querySelector<HTMLSelectElement>("select")!;
  select.value = select.options[2].value;
  select.dispatchEvent(
    new select.ownerDocument.defaultView!.Event("change", { bubbles: true }),
  );
}
