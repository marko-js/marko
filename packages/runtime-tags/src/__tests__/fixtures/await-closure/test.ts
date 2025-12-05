import { after, flush } from "../../utils/resolve";

export const steps = [
  {},
  after(1),
  click,
  after(2),
  click,
  after(3),
  flush,
  after(5),
  click,
];

function click(container: Element) {
  container.querySelector("button")!.click();
}
