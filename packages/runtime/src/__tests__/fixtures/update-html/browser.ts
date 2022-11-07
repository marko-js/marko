import {
  html,
  createRenderFn,
  Scope,
  source,
  destructureSources,
  setSource,
} from "@marko/runtime-fluurt/src/dom";
import { over, get } from "../../utils/walks";
import type { steps } from "./test";

type Input = typeof steps[number];

const enum INDEX {
  html = 0,
  value = 2,
}

type ComponentScope = Scope<{
  [INDEX.html]: Node & ChildNode;
  [INDEX.value]: Input["value"];
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
