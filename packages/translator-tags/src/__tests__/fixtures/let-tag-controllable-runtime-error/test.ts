import { throws } from "../../utils/resolve";

export const steps = [{}, increment, increment, throws(toggle)];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#inc")!.click();
}

function toggle(container: Element) {
  container.querySelector<HTMLButtonElement>("#toggle")!.click();
}

export const skip_resume = true;