export const steps = [
  { $global: { x: 1, serializedGlobals: ["x"] } },
  click,
  click,
  click,
];

function click(container: Element) {
  container.querySelector("button")!.click();
}
