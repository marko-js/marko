import {
  data,
  conditional,
  createRenderer,
  createRenderFn,
  source,
  closure,
  inConditionalScope,
  Scope,
  destructureSources,
  setSource,
} from "../../../dom/index";
import { get, next, over } from "../../utils/walks";
import type { steps } from "./test";

type Input = typeof steps[number];

const enum INDEX {
  comment = 0,
  conditional = 0,
  value = 6,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.value]: Input["value"];
}>;

const enum INDEX_BRANCH0 {
  text = 0,
  value = 1,
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [INDEX_BRANCH0.text]: Text;
}>;

// <attrs/{ value }/>
// <div>
//   <span/>
//   <if=value>
//     <span>${value}</span>
//   </if>
//   <span/>
// </div>

export const template = `<div><span></span><!><span></span></div>`;
export const walks = next(2) + get + over(2);

const value$if = closure(
  1,
  INDEX.value,
  [],
  (scope: Branch0Scope, value: string) => {
    data(scope[INDEX_BRANCH0.text], value);
  }
);

const _if = conditional(INDEX.conditional, 1, (scope: ComponentScope) =>
  scope[INDEX.value] ? _ifBody : undefined
);

export const value_subscribers = [
  _if,
  inConditionalScope(value$if, INDEX.conditional),
];

const _value = source(INDEX.value, value_subscribers);

export const attrs = destructureSources(
  [_value],
  (scope: ComponentScope, { value }: Input) => {
    setSource(scope, _value, value);
  }
);

export default createRenderFn(template, walks, undefined, attrs);

const _ifBody = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined, // optimization (value will always be set in _apply_value),
  [value$if]
);
