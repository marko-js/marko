import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait(3), click, wait(4)];

export const skip_equivalent = true; // in-order streaming

function click(container: Element) {
  container.querySelector("button")!.click();
}
