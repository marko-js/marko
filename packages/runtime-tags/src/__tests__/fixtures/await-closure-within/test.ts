import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait, click, wait, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
