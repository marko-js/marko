export const steps = [{}, select0, select1, select2, reset];

function select0(container: Element) {
  selectIndex(container, 0);
}
function select1(container: Element) {
  selectIndex(container, 1);
}
function select2(container: Element) {
  selectIndex(container, 2);
}

function reset(container: Element) {
  container.querySelector<HTMLButtonElement>("button")!.click();
}

function selectIndex(container: Element, index: number) {
  const select = container.querySelector<HTMLSelectElement>(`select`)!;
  select.options[index].selected = true;
  select.dispatchEvent(
    new select.ownerDocument.defaultView!.Event("input", { bubbles: true }),
  );
}
