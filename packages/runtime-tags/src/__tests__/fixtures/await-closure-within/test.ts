import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait(2), click, wait(1), click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
