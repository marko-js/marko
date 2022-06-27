import { attr, createRenderFn, Scope, source, destructureSources, setSource } from "../../../dom/index";
import { get, over } from "../../utils/walks";

export const inputs = [
  {
    value: 1,
  },
  {
    value: "1",
  },
  {
    value: "2",
  },
  {
    value: null,
  },
  {
    value: "1",
  },
  {
    value: false,
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

// <attrs/{ value }/>
// <div a=0 b=input.value/>
export const template = `<div a=0></div>`;
export const walks = get + over(1);

export const value_subscribers = [];
export const value_action = (scope: ComponentScope, value: ComponentScope[INDEX.value]) => {
  attr(scope[INDEX.div], "b", value);
}

const _value = source(INDEX.value, value_subscribers, value_action);

export const attrs = destructureSources([_value], (scope: ComponentScope, { value }: Input) => {
  setSource(scope, _value, value);
});

export default createRenderFn(template, walks, undefined, attrs);
