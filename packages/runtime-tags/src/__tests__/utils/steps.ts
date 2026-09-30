// Interaction steps named for what they do; a render log labels each step by
// its call rather than by the source of a helper.
export type Step = ((document: Document) => void) & { label: string };

export function click(selector: string, index?: number): Step {
  return step("click", [selector, index], (document) =>
    find(document, selector, index).click(),
  );
}

export function type(selector: string, value: string, index?: number): Step {
  return step("type", [selector, value, index], (document) => {
    const field = find(document, selector, index) as HTMLInputElement;
    field.value = value;
    field.dispatchEvent(
      new field.ownerDocument.defaultView!.Event("input", { bubbles: true }),
    );
  });
}

function step(
  name: string,
  args: unknown[],
  run: (document: Document) => void,
): Step {
  const shown = args.filter((arg) => arg !== undefined);
  return Object.assign(run, {
    label: `${name}(${shown.map((arg) => JSON.stringify(arg)).join(", ")})`,
  });
}

function find(document: Document, selector: string, index = 0) {
  const element = document.querySelectorAll<HTMLElement>(selector)[index];
  if (!element) {
    throw new Error(`No element ${index} matches ${JSON.stringify(selector)}`);
  }
  return element;
}
