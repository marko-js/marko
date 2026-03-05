import type { TestConfig } from "../../main.test";

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
  select.value = select.options[index].value;
  select.dispatchEvent(
    new select.ownerDocument.defaultView!.Event("input", { bubbles: true }),
  );
}

export const config: TestConfig = {
  steps: [{}, select0, select1, select2, reset],
};
