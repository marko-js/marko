import { flush, wait } from "../../utils/resolve";

export const steps = [{}, flush, wait, click, wait];

export const skip_equivalent = true; // in-order streaming

function click(container: Element) {
  container.querySelector("button")!.click();
}
