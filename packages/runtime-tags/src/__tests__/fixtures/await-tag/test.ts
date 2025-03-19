import { wait } from "../../utils/resolve";

export const steps = [{}, wait(2), click, click, click];

function click(container: Element) {
  container.querySelector("button")!.click();
}
