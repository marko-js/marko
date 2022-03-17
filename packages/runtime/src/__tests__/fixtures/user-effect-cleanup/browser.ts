import {
  data,
  createRenderFn,
  userEffect,
  queue,
  queueHydrate,
  write,
  bind,
  Scope,
} from "../../../dom/index";
import { wait } from "../../utils/resolve";
import { get, next, open, close } from "../../utils/walks";

export const inputs = [{ value: 0 }, wait(4), { value: 1 }, wait(4)] as const;

const enum Index {
  DIV_TEXT = 0,
  INPUT_VALUE = 1,
  A = 2,
  B = 3,
  CONCAT_AB = 4,
  EFFECT_CLEANUP = 5,
}

type ComponentScope = Scope<{
  [Index.DIV_TEXT]: Text;
  [Index.INPUT_VALUE]: typeof inputs[0 | 2]["value"];
  [Index.A]: number;
  [Index.B]: number;
  [Index.CONCAT_AB]: string;
  [Index.EFFECT_CLEANUP]: () => void;
}>;

// <let/a = 0/>
// <let/b = 0/>
// <div>${"" + a + b}</div>
// <effect() {
//   const previousValue = a = input.value + 1;
//   return () => b = previousValue;
// }/>
export const template = `<div> </div>`;
export const walks = open(5) + next(1) + get + next(1) + close;
export const render = (scope: ComponentScope) => {
  execA(scope, 0);
  execB(scope, 0);
};

function execA(scope: ComponentScope, value: ComponentScope[Index.A]) {
  if (write(scope, Index.A, value)) {
    queue(scope, execAB, Index.CONCAT_AB);
  }
}

function execB(scope: ComponentScope, value: ComponentScope[Index.B]) {
  if (write(scope, Index.B, value)) {
    queue(scope, execAB, Index.CONCAT_AB);
  }
}

function execAB(scope: ComponentScope) {
  execConcatAB(scope, "" + scope[Index.A] + scope[Index.B]);
}

function execConcatAB(
  scope: ComponentScope,
  value: ComponentScope[Index.CONCAT_AB]
) {
  if (write(scope, Index.CONCAT_AB, value)) {
    data(scope, Index.DIV_TEXT, value);
  }
}

export const hydrateInputValue = (scope: ComponentScope) => {
  userEffect(scope, Index.EFFECT_CLEANUP, effectFn);
};

const effectFn = (scope: ComponentScope) => {
  const previousValue = scope[Index.INPUT_VALUE] + 1;
  queue(scope, execA, Index.A, previousValue);
  return bind(scope, () => {
    queue(scope, execB, Index.B, previousValue);
  });
};

export const execDynamicInput = (
  scope: ComponentScope,
  input: typeof inputs[0]
) => {
  if (write(scope, Index.INPUT_VALUE, input.value)) {
    queueHydrate(scope, hydrateInputValue);
  }
};

export default createRenderFn(template, walks, render, 0, execDynamicInput);
