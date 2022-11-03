import { lifecycle } from "../../../dom/dom";
import {
  data,
  createRenderFn,
  queueHydrate,
  bind,
  Scope,
  queueSource,
  setSource,
  source,
  destructureSources,
} from "../../../dom/index";
import { wait } from "../../utils/resolve";
import { get, next } from "../../utils/walks";

export const inputs = [{ value: 0 }, wait(4), { value: 1 }, wait(4)] as const;

type Input = { value: number };

const enum Index {
  DIV_TEXT = 0,
  INPUT_VALUE = 1,
  INPUT_VALUE_MARK = 2,
  A = 3,
  LIFECYCLE = 4,
}

type ComponentScope = Scope<{
  [Index.DIV_TEXT]: Text;
  [Index.INPUT_VALUE]: typeof inputs[0 | 2]["value"];
  [Index.A]: number;
  [Index.LIFECYCLE]: () => void;
}>;

// <let/a = 0/>
// <div>${"" + a}</div>
// <lifecycle
//   onMount() { a = "mount"; }
//   onUpdate() { input.value; a = "update"; }
//   onDestroy() { a = "destroy"; }
//  />
export const template = `<div> </div>`;
export const walks = next(1) + get + next(1);
export const setup = (scope: ComponentScope) => {
  setSource(scope, _a, 0);
};

const _a = source(Index.A, [], (scope, a) => {
  data(scope[Index.DIV_TEXT], a);
});

export const hydrateInputValue = (scope: ComponentScope) => {
  lifecycle(scope, Index.LIFECYCLE, {
    onMount: bind(scope, onMount),
    onUpdate: bind(scope, onUpdate),
    onDestroy: bind(scope, onDestroy),
  });
};

function onMount(scope: ComponentScope) {
  queueSource(scope, _a, "mount");
}

function onUpdate(scope: ComponentScope) {
  scope[Index.INPUT_VALUE];
  queueSource(scope, _a, "update");
}

function onDestroy(scope: ComponentScope) {
  queueSource(scope, _a, "destroy");
}

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
