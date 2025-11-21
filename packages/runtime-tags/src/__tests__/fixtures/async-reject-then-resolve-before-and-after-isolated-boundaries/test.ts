import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, flush, wait(4), click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
