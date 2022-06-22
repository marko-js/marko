import {
  data,
  conditional,
  conditionalOnlyChild,
  inConditionalScope,
  createRenderer,
  createRenderFn,
  dynamicFragment,
  closure,
  inputAttr,
  Scope,
} from "../../../dom/index";
import { next, over, get, skip } from "../../utils/walks";

export const inputs = [
  {
    show: false,
    value1: "Hello",
    value2: "World",
  },
  {
    show: true,
    value1: "Hello",
    value2: "World",
  },
  {
    show: true,
    value1: false,
    value2: "World",
  },
  {
    show: true,
    value1: "Goodbye",
    value2: "World",
  },
  {
    show: false,
    value1: "Goodbye",
    value2: "World",
  },
];

type Input = typeof inputs[number];

const enum INDEX {
  comment = 0,
  conditional = 0,
  conditional_scope = 1,
  show = 6,
  value1 = 9,
  value2 = 12,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.show]: Input["show"];
  [INDEX.value1]: Input["value1"];
  [INDEX.value2]: Input["value2"];
  ["___attrs"]: Input;
}>;

const enum INDEX_IF0 {
  comment1 = 0,
  conditional1 = 0,
  conditional1_scope = 1,
  comment2 = 6,
  conditional2 = 6,
  conditional2_scope = 7,
  value1 = 12,
  value2 = 15
}

type If0Scope = Scope<{
  _: ComponentScope;
  [INDEX_IF0.comment1]: Comment;
  [INDEX_IF0.conditional1]: Comment;
  [INDEX_IF0.comment2]: Comment;
  [INDEX_IF0.conditional2]: Comment;
}>;

const enum INDEX_IF1 {
  text = 0,
  value1 = 1,
}

type If1Scope = Scope<{
  _: If0Scope;
  [INDEX_IF1.text]: Text;
}>;

const enum INDEX_IF2 {
  text = 0,
  value2 = 1,
}

type If2Scope = Scope<{
  _: If0Scope;
  [INDEX_IF2.text]: Text;
}>;

// <attrs/{show, value1, value2}/>
// <div>
//   <if=show>
//     <if=value1><span>${value1}</span></if>
//     <if=value2><span>${value2}</span></if>
//   </if>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);

const value2$if2 = closure(
  INDEX_IF2.value2, 
  2, 
  1, 
  INDEX_IF0.value2, 
  [], 
  (scope: If2Scope, value: string) => {
    data(scope[INDEX_IF2.text], value);
  }
);

const value1$if1 = closure(
  INDEX_IF1.value1,
  2,
  1,
  INDEX_IF0.value1,
  [],
  (scope: If1Scope, value: string) => {
    data(scope[INDEX_IF1.text], value);
  }
);

const _if2 = conditional(
  INDEX_IF0.conditional2,
  1,
  (scope: If0Scope) => scope[INDEX_IF0.value2] ? ifBody2 : undefined
);

const _if1 = conditional(
  INDEX_IF0.conditional1,
  1,
  (scope: If0Scope) => scope[INDEX_IF0.value1] ? ifBody1 : undefined
);

const value2$if0 = closure(
  INDEX_IF0.value2,
  2,
  1,
  INDEX.value2,
  [
    _if2,
    inConditionalScope(value2$if2, (scope: If0Scope) => scope[INDEX_IF0.conditional2_scope])
  ]
);

const value1$if0 = closure(
  INDEX_IF0.value1,
  2,
  1,
  INDEX.value1,
  [
    _if1,
    inConditionalScope(value1$if1, (scope: If0Scope) => scope[INDEX_IF0.conditional1_scope])
  ]
);

const _if0 = conditionalOnlyChild(
  INDEX.conditional,
  1,
  (scope: ComponentScope) => scope[INDEX.show] ? ifBody0 : undefined,
  dynamicFragment
);

export const value2_subscribers = [
  inConditionalScope(value2$if0, (scope: ComponentScope) => scope[INDEX.conditional_scope])
];

export const value1_subscribers = [
  inConditionalScope(value1$if0, (scope: ComponentScope) => scope[INDEX.conditional_scope])
];

export const show_subscribers = [_if0];

export const attrs_subscribers = [
  inputAttr(INDEX.show, show_subscribers, (attrs: Input) => attrs.show),
  inputAttr(INDEX.value1, value1_subscribers, (attrs: Input) => attrs.value1),
  inputAttr(INDEX.value2, value2_subscribers, (attrs: Input) => attrs.value2),
]

export default createRenderFn(template, walks, undefined, attrs_subscribers);

const ifBody0 = createRenderer(
  "<!><!>",
  get + over(1) + skip(5) + get + over(1),
  undefined,
  [value1$if0, value2$if0],
  0,
  INDEX_IF0.conditional1,
  INDEX_IF0.conditional2
);

const ifBody1 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined,
  [value1$if1]
);

const ifBody2 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined,
  [value2$if2]
);
