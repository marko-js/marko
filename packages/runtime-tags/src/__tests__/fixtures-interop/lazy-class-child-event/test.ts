import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, click, hoverBody, wait, click, wait],
  equivalent: false,
};

function hoverBody(document: Document) {
  const { defaultView } = document;
  document.body.dispatchEvent(new defaultView!.MouseEvent("mouseover"));
}

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("#inc")!.click();
}
