import {
  html,
  createRenderFn,
  Scope,
  source,
  destructureSources,
  setSource,
} from "../../../dom/index";
import { over, get } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello <strong>World</strong>",
  },
  {
    value: "Some content",
  },
  {
    value: "<div/>",
  },
];

export const FAILS_HYDRATE = true;

type Input = typeof inputs[number];

const enum INDEX {
  html = 0,
  value = 2,
}

type ComponentScope = Scope<{
  [INDEX.html]: Node & ChildNode;
  [INDEX.value]: typeof inputs[number]["value"];
}>;

// <attrs/{ value }/>
// <em>Testing</em> $!{input.value}
export const template = "<em>Testing</em> <!>";
export const walks = over(2) + get + over(1);

export const value_subscribers = [];
export const value_action = (
  scope: ComponentScope,
  value: ComponentScope[INDEX.value]
) => {
  html(scope, value, INDEX.html);
};

const _value = source(INDEX.value, value_subscribers, value_action);

export const attrs = destructureSources(
  [_value],
  (scope: ComponentScope, { value }: Input) => {
    setSource(scope, _value, value);
  }
);

export default createRenderFn(template, walks, undefined, attrs);
