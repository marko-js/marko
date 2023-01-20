import {
  attrs,
  createRenderFn,
  Scope,
  destructureSources,
  setSource,
  source,
} from "@marko/runtime-fluurt/src/dom";
import { get, over } from "../../utils/walks";
import type { steps } from "./test";

type Input = typeof steps[number];

const enum INDEX {
  div = "#div/0",
  value = "value",
}

type ComponentScope = Scope<{
  [INDEX.div]: HTMLDivElement;
  [INDEX.value]: Input["value"];
}>;

// <attrs/{ value }/>
// <div ...value/>
export const template = `<div></div>`;
export const walks = get + over(1);

export const value_subscribers = [];
export const value_action = (scope: ComponentScope) => {
  attrs(scope, INDEX.div, INDEX.value);
};

const _value = source(INDEX.value, value_subscribers, value_action);

export const _attrs = destructureSources(
  [_value],
  (scope: ComponentScope, { value }: Input) => {
    setSource(scope, _value, value);
  }
);

export default createRenderFn(template, walks, undefined, _attrs);
