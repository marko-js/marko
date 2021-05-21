import {
  data,
  walk,
  set,
  register,
  createRenderFn,
  userEffect,
  checkDirty,
  Scope,
  queue,
  setQueued
} from "../../../../src/dom/index";
import { wait } from "../../../utils/resolve";
import { get, next } from "../../utils/walks";

export const inputs = [{ value: 0 }, wait(2), { value: 1 }, wait(2)] as const;

export const template = `<div> </div>`;
export const walks = next(1) + get + next(1);
export const hydrate = register("", (scope: Scope, offset: number) => {
  scope[offset + 1] = walk();
  scope[offset + 2] = 0;
  scope[offset + 3] = 0;
  scope[offset + 4] = () => {
    const previousValue = (scope[offset] as number) + 1;
    setQueued(scope, offset + 2, previousValue);
    queue(execAB, scope, offset);
    return () => {
      setQueued(scope, offset + 3, previousValue);
      queue(execAB, scope, offset);
    };
  };
  execAB(scope, offset);
});

function execAB(scope: Scope, offset: number) {
  if (checkDirty(scope, offset + 2) || checkDirty(scope, offset + 3)) {
    data(scope[offset + 1] as Text, "" + scope[offset + 2] + scope[offset + 3]);
  }
}

export const execInputValue = (scope: Scope, offset: number) => {
  if (checkDirty(scope, offset)) {
    userEffect(scope, offset + 5, scope[offset + 4] as any);
  }
};

export const execDynamicInput = (
  input: typeof inputs[0],
  scope: Scope,
  offset: number
) => {
  set(scope, offset, input.value);
  execInputValue(scope, offset);
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);
