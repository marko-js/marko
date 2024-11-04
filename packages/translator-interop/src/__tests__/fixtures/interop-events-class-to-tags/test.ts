export const steps = [
  {},
  clickTags,
  clickTags,
];

function clickTags(container: Element) {
  (container.querySelector("#tags-api") as HTMLButtonElement).click();
}
