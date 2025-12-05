import { wait } from "../../utils/resolve";

export const steps = [{}, increment, increment, wait];

function increment(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")?.click();
}
