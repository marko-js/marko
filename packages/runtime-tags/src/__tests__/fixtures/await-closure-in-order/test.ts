import { flush, wait } from "../../utils/resolve";

export const steps = [
  {},
  wait(1),
  click,
  wait(1),
  click,
  wait(1),
  flush,
  click,
];

export const skip_equivalent = true; // in-order streaming

function click(container: Element) {
  container.querySelector("button")!.click();
}
