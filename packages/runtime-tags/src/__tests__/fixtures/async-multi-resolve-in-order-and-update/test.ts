import { wait } from "../../utils/resolve";

export const steps = [{}, wait(6), click, wait(6)];

function click(container: Element) {
  container.querySelector("button")!.click();
}
