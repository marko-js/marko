import {
  on,
  walk,
  conditional,
  Conditional,
  Scope,
  checkDirty,
  set,
  register,
  createRenderer,
  createRenderFn,
  setConditionalRenderer,
  data,
  queue,
  ensureDelegated,
  staticNodeMethods
} from "../../../../src/dom/index";

import { get, next, over } from "../../utils/walks";

const click = (container: Element) => {
  container.querySelector("button")!.click();
};

export const inputs = [{}, click] as const;

export const template = `<button></button><!>`;
export const walks = get + over(1) + get + over(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset] = true;
  scope[offset + 1] = "hi";
  on(walk() as HTMLButtonElement, "click", () => {
    set(scope, offset + 1, "bye");
    set(scope, offset, false);
    queue(execShowMessage, scope, offset);
  });
  scope[offset + 2] = conditional(walk() as Comment, scope, offset);

  execShowMessage(scope, offset);
});

const execShowMessage = (scope: Scope, offset: number) => {
  const cond0 = scope[offset + 2] as Conditional;
  if (checkDirty(scope, offset)) {
    setConditionalRenderer(cond0, scope[offset] ? branch0 : undefined);
  }
  if (cond0.renderer === branch0) {
    const cond0_scope = cond0.scope;
    if (checkDirty(cond0_scope, 0) || checkDirty(scope, offset + 1)) {
      data(cond0_scope[0] as Text, scope[offset + 1]);
    }
  }
};

export default createRenderFn(template, walks, hydrate, 0);

ensureDelegated("click");

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  (scope: Scope) => {
    scope[0] = walk();
  },
  0,
  staticNodeMethods
);
