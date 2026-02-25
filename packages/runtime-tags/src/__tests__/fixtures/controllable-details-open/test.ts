export const steps = [{}, toggle, toggle, toggle];

async function toggle(container: Element) {
  container.querySelector("summary")!.click();
  await new Promise((r) => setTimeout(r, 0));
}
