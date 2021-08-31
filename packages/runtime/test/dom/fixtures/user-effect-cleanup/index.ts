import {
  data,
  register,
  createRenderFn,
  userEffect,
  isDirty,
  queue,
  read,
  write,
  writeQueued,
  bind
} from "../../../../src/dom/index";
import { wait } from "../../../utils/resolve";
import { get, next, open, close } from "../../utils/walks";

export const inputs = [{ value: 0 }, wait(2), { value: 1 }, wait(2)] as const;

const enum Index {
  DIV_TEXT = 0,
  INPUT_VALUE = 1,
  A = 2,
  B = 3,
  EFFECT_CLEANUP = 4
}

type scope = {
  [Index.DIV_TEXT]: Text;
  [Index.INPUT_VALUE]: typeof inputs[0 | 2]["value"];
  [Index.A]: number;
  [Index.B]: number;
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
  write(Index.A, 0);
  write(Index.B, 0);
  execAB();
};

function execAB() {
  if (isDirty(Index.A) || isDirty(Index.B)) {
    data(Index.DIV_TEXT, "" + read(Index.A) + read(Index.B));
  }
}

export const hydrateInputValue = () => {
  if (isDirty(Index.INPUT_VALUE)) {
    userEffect(Index.EFFECT_CLEANUP, effectFn);
  }
};

const effectFn = () => {
  const previousValue = read<scope, Index.INPUT_VALUE>(Index.INPUT_VALUE) + 1;
  writeQueued(Index.A, previousValue);
  queue(execAB);
  return bind(() => {
    writeQueued(Index.B, previousValue);
    queue(execAB);
  });
};

export const execDynamicInput = (input: typeof inputs[0]) => {
  write(Index.INPUT_VALUE, input.value);
  hydrateInputValue();
};

export default createRenderFn(template, walks, render, 0, execDynamicInput);
