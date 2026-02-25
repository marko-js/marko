export const steps = [{}, toggle, toggle, toggle];

function toggle(container: Element) {
  const dialog = container.querySelector<HTMLDialogElement>("dialog")!;
  dialog.open = !dialog.open;
}
