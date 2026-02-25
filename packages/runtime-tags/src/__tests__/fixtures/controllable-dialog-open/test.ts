export const steps = [{}, close];

async function close(container: Element) {
  const dialog = container.querySelector<HTMLDialogElement>("dialog")!;
  dialog.open = false;
  dialog.dispatchEvent(new dialog.ownerDocument.defaultView!.Event("close"));
}
