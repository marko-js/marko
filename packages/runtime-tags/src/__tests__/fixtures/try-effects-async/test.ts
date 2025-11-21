import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait(1), click, wait(1), click, wait(1)];

function click(container: Element) {
  container.querySelector("button")!.click();
}
