//export const skip_ssr = true;

import { wait } from "../../utils/resolve";

export const steps = [{}, increment, increment, wait(1)];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}
