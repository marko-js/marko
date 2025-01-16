export const steps = [{}, clickAllButtons, clickAllButtons, clickAllButtons];

function clickAllButtons(container: Element) {
  container.querySelectorAll("button")!.forEach((item) => item.click());
}
