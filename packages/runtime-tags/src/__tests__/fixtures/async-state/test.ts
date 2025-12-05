import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait, click, wait, click, wait];

function click(container: Element) {
  container.querySelector("button")!.click();
}
