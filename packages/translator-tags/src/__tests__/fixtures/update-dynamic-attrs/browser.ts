import {
  type Scope,
  attrs,
  createRenderer,
  createTemplate,
  value,
} from "@marko/runtime-fluurt/src/dom";
import { get, over } from "../../utils/walks";
import type { steps } from "./test";

type Input = (typeof steps)[number];

const enum INDEX {
  div = "#div/0",
  value = "value",
}

// type ComponentScope = Scope<{
//   [INDEX.div]: HTMLDivElement;
//   [INDEX.value]: Input["value"];
// }>;

// <attrs/{ value }/>
// <div ...value/>
export const template = `<div></div>`;
export const walks = get + over(1);

const _value = value(INDEX.value, (scope: Scope, value: Input["value"]) => {
  value && attrs(scope, INDEX.div, value);
});

export const _attrs = (scope: Scope, input: Input, clean?: boolean | 1) => {
  let value: Input["value"];
  if (!clean) {
    ({ value } = input);
  }
  _value(scope, value!, clean);
};

export default createTemplate(
  createRenderer(
    template,
    walks,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    _attrs as any,
  ),
);
