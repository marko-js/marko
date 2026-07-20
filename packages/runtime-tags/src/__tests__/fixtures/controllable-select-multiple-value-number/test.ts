import type { TestConfig } from "../../main.test";

function select0(document: Document) {
  selectIndex(document, 0);
}

function select1(document: Document) {
  selectIndex(document, 1);
}

function select2(document: Document) {
  selectIndex(document, 2);
}

function reset(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

function selectIndex(document: Document, index: number) {
  const select = document.querySelector<HTMLSelectElement>(`select`)!;
  select.options[index].selected = true;
  select.dispatchEvent(
    new select.ownerDocument.defaultView!.Event("input", { bubbles: true }),
  );
}

export const config: TestConfig = {
  steps: [{}, select0, select1, select2, reset],
};
