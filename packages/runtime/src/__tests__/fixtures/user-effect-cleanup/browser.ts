import {
  data,
  createRenderFn,
  userEffect,
  queue,
  read,
  write,
  bind,
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

type scope = {
  [Index.DIV_TEXT]: Text;
  [Index.INPUT_VALUE]: typeof inputs[0 | 2]["value"];
  [Index.A]: number;
  [Index.B]: number;
  [Index.CONCAT_AB]: string;
  [Index.EFFECT_CLEANUP]: () => void;
};

// <let/a = 0/>
// <let/b = 0/>
// <div>${"" + a + b}</div>
// <effect() {
//   const previousValue = a = input.value + 1;
//   return () => b = previousValue;
// }/>
export const template = `<div> </div>`;
export const walks = open(5) + next(1) + get + next(1) + close;
export const render = () => {
  execA(0);
  execB(0);
};

function execA(value: scope[Index.A]) {
  if (write(Index.A, value)) {
    queue(execAB, Index.CONCAT_AB);
  }
}

function execB(value: scope[Index.B]) {
  if (write(Index.B, value)) {
    queue(execAB, Index.CONCAT_AB);
  }
}

function execAB() {
  execConcatAB("" + read(Index.A) + read(Index.B));
}

function execConcatAB(value: scope[Index.CONCAT_AB]) {
  if (write(Index.CONCAT_AB, value)) {
    data(Index.DIV_TEXT, value);
  }
}

export const hydrateInputValue = () => {
  userEffect(Index.EFFECT_CLEANUP, effectFn);
};

const effectFn = () => {
  const previousValue = read<scope, Index.INPUT_VALUE>(Index.INPUT_VALUE) + 1;
  queue(execA, Index.A, previousValue);
  return bind(() => {
    queue(execB, Index.B, previousValue);
  });
};

export const execDynamicInput = (input: typeof inputs[0]) => {
  if (write(Index.INPUT_VALUE, input.value)) {
    hydrateInputValue();
  }
};

export default createRenderFn(template, walks, render, 0, execDynamicInput);
