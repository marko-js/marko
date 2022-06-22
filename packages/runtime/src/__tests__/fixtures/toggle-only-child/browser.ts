import {
  data,
  conditionalOnlyChild,
  createRenderer,
  createRenderFn,
  inputAttr,
  closure,
  inConditionalScope,
  Scope,
} from "../../../dom/index";
import { get, next, over } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello",
  },
  {
    value: false,
  },
  {
    value: "World",
  },
  {
    value: "!",
  },
];

type Input = typeof inputs[number];

const enum INDEX {
  comment = 0,
  conditional = 0,
  conditional_scope = 1,
  value = 6,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.conditional_scope]: Branch0Scope | undefined;
  [INDEX.value]: Input["value"];
}>;

const enum INDEX_BRANCH0 {
  text = 0,
  value = 1
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [INDEX_BRANCH0.text]: Text;
}>;


// <attrs/{ value }/>
// <div>
//   <if=value>
//     <span>${value}</span>
//   </if>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);

const value$if = closure(
  INDEX_BRANCH0.value, 
  2, 
  1, 
  INDEX.value, 
  [], 
  (scope: Branch0Scope, value: string) => {
    data(scope[INDEX_BRANCH0.text], value);
  }
);

const _if = conditionalOnlyChild(
  INDEX.conditional, 
  1, 
  (scope: ComponentScope) => scope[INDEX.value] ? _ifBody : undefined
);

export const value_subscribers = [
  _if, 
  inConditionalScope(value$if, (scope: ComponentScope) => scope[INDEX.conditional_scope])
];

export const attrs_subscribers = [
  inputAttr(INDEX.value, value_subscribers, (attrs: Input) => attrs.value)
];

export default createRenderFn(template, walks, undefined, attrs_subscribers);

const _ifBody = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined, // optimization (value will always be set in _apply_value),
  [value$if]
);
