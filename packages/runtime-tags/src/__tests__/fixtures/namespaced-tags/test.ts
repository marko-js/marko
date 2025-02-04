export const steps = [
  {
    value: "<a href=#></a>",
  },
  clickParent,
  clickParent,
  clickParent,
  clickChild,
  clickChild,
  clickChild,
];

function clickParent(container: Element) {
  (container.querySelector(".toggle-parent") as HTMLButtonElement).click();
}

function clickChild(container: Element) {
  (container.querySelector(".toggle-child") as HTMLButtonElement).click();
}
