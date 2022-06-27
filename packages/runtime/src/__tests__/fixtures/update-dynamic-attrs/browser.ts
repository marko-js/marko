import { attrs, createRenderFn, Scope, destructureSources, setSource, source } from "../../../dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: { a: 1, b: 2 },
  },
  {
    value: { b: 2, c: 3 },
  },
  {
    value: {},
  },
  {
    value: null,
  },
  {
    value: { a: 1 },
  },
];

type Input = typeof inputs[number];

const enum INDEX {
  div = 0,
  value = 1,
}

type ComponentScope = Scope<{
  [INDEX.div]: HTMLDivElement;
  [INDEX.value]: typeof inputs[number]["value"];
}>;

// <div ...input.value/>
export const template = `<div></div>`;
export const walks = get + over(1);

export const value_subscribers = [];
export const value_action = (scope: ComponentScope) => {
  attrs(scope, INDEX.div, INDEX.value);
}

const _value = source(INDEX.value, value_subscribers, value_action);

export const _attrs = destructureSources([_value], (scope: ComponentScope, { value }: Input) => {
  setSource(scope, _value, value);
});

export default createRenderFn(template, walks, undefined, _attrs);
