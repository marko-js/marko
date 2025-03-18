import { wait } from "../../utils/resolve";

export const steps = [{}, wait(1), click, wait(1), click, wait(1)];

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const skip_resume = true;