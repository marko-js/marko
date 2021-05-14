import {
  on,
  walk,
  Scope,
  set,
  checkDirty,
  data,
  register,
  createRenderFn,
  ensureDelegated,
  queue
} from "../../../../src/dom/index";
import { get, next } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

export const template = `<button> </button>`;
export const walks = get + next(1) + get + next(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset] = 0;
  scope[offset + 1] = 0;
  on(walk() as HTMLButtonElement, "click", () => {
    set(scope, offset, 1);
    set(scope, offset + 1, 1);
    queue(execAB, scope, offset);
  });
  scope[offset + 2] = walk();

  execAB(scope, offset);
});

const execAB = (scope: Scope, offset: number) => {
  if (checkDirty(scope, offset) || checkDirty(scope, offset + 1)) {
    data(
      scope[offset + 2] as Text,
      (scope[offset] as number) + (scope[offset + 1] as number)
    );
  }
};

export default createRenderFn(template, walks, hydrate, 0);

ensureDelegated("click");
