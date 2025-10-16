import { wait } from "../../utils/resolve";

export const steps = [{}, wait(4), click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
