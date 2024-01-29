export const steps = [
  { $global: { x: 1, serializedGlobals: ["x"] } },
  click,
  click,
  click,
];

function click(container: Element) {
  container.querySelector("button")!.click();
}

// TODO: Hydrate works, but CSR does not because there currently is no way to client render with globals
export const skip_csr = true;
