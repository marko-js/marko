import {
  data,
  createRenderFn,
  userEffect,
  queueHydrate,
  bind,
  Scope,
  queueSource,
  setSource,
  derivation,
  source,
  destructureSources,
} from "@marko/runtime-fluurt/src/dom";
import { get, next } from "../../utils/walks";

type Input = { value: number };

const enum Index {
  DIV_TEXT = 0,
  INPUT_VALUE = 1,
  INPUT_VALUE_MARK = 2,
  A = 3,
  A_MARK = 4,
  B = 5,
  B_MARK = 6,
  CONCAT_AB = 7,
  CONCAT_AB_MARK = 8,
  CONCAT_AB_STALE = 9,
  EFFECT_CLEANUP = 10,
}

type ComponentScope = Scope<{
  [Index.DIV_TEXT]: Text;
  [Index.INPUT_VALUE]: Input["value"];
  [Index.A]: number;
  [Index.B]: number;
  [Index.CONCAT_AB]: string;
  [Index.EFFECT_CLEANUP]: () => void;
}>;

// <attrs/{ value }/>
// <let/a = 0/>
// <let/b = 0/>
// <div>${"" + a + b}</div>
// <effect() {
//   const previousValue = a = value + 1;
//   return () => b = previousValue;
// }/>
export const template = `<div> </div>`;
export const walks = next(1) + get + next(1);
export const setup = (scope: ComponentScope) => {
  setSource(scope, _a, 0);
  setSource(scope, _b, 0);
};

const _ab = derivation(
  Index.CONCAT_AB,
  2,
  [],
  (scope) => "" + scope[Index.A] + scope[Index.B],
  (scope, ab) => {
    data(scope[Index.DIV_TEXT], ab);
  }
);

const _a = source(Index.A, [_ab]);

const _b = source(Index.B, [_ab]);

export const hydrateInputValue = (scope: ComponentScope) => {
  userEffect(scope, Index.EFFECT_CLEANUP, effectFn);
};

const effectFn = (scope: ComponentScope) => {
  const previousValue = scope[Index.INPUT_VALUE] + 1;
  queueSource(scope, _a, previousValue);
  return bind(scope, () => {
    queueSource(scope, _b, previousValue);
  });
};

export const value_subscribers = [];
export const value_action = (scope: ComponentScope) => {
  queueHydrate(scope, hydrateInputValue);
};

const _value = source(Index.INPUT_VALUE, value_subscribers, value_action);

export const attrs = destructureSources(
  [_value],
  (scope: ComponentScope, { value }: Input) => {
    setSource(scope, _value, value);
  }
);

export default createRenderFn(template, walks, setup, attrs);
