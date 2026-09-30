import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{ value: 1 }, click("#inc"), hoverBody, wait, click("#inc"), wait],
  equivalent: false,
};

function hoverBody(document: Document) {
  const { defaultView } = document;
  document.body.dispatchEvent(new defaultView!.MouseEvent("mouseover"));
}
