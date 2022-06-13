import {
  data,
  setConditionalRendererOnlyChild,
  createRenderer,
  createRenderFn,
  derivation,
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

const enum INDEX {
  comment = 0,
  conditional = 0,
  conditional_scope = 1,
  value = 4,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.value]: typeof inputs[number]["value"];
  ["___attrs"]: typeof inputs[number];
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

const value$if = closure(INDEX_BRANCH0.value, 1, 1, INDEX.value, [], (scope: Branch0Scope, value: string) => {
  data(scope[INDEX_BRANCH0.text], value);
})
export const value_subscribers = [inConditionalScope(value$if, (scope: ComponentScope) => scope[INDEX.conditional_scope])];
export const value_action = (scope: ComponentScope, value: string | boolean) => {
  setConditionalRendererOnlyChild(
    scope,
    INDEX.conditional,
    value ? branch0 : undefined
  );
}
const value = derivation(INDEX.value, 1, value_subscribers, (scope: ComponentScope) => scope["___attrs"].value, value_action);
export const attrs_subscribers = [value];

export default createRenderFn(template, walks, undefined, attrs_subscribers);

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined, // optimization (value will always be set in _apply_value)
  0
);
