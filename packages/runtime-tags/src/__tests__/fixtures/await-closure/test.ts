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

function click(container: Element) {
  container.querySelector("button")!.click();
}
