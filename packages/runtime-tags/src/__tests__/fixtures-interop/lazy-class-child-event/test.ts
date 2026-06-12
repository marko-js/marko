import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{ value: 1 }, click, hoverBody, wait, click, wait],
  equivalent: false,
};

function hoverBody(container: Element) {
  const { defaultView } = container.ownerDocument;
  container.ownerDocument.body.dispatchEvent(
    new defaultView!.MouseEvent("mouseover"),
  );
}

function click(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}
