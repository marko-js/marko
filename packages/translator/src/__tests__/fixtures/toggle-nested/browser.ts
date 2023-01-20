import {
  data,
  conditional,
  conditionalOnlyChild,
  inConditionalScope,
  createRenderer,
  createRenderFn,
  dynamicFragment,
  closure,
  Scope,
  destructureSources,
  source,
  setSource,
} from "@marko/runtime-fluurt/src/dom";
import { next, over, get } from "../../utils/walks";
import type { steps } from "./test";

type Input = typeof steps[number];

const enum INDEX {
  div = "#div/0",
  conditional = "#div/0",
  show = "show",
  value1 = "value1",
  value2 = "value2",
}

type ComponentScope = Scope<{
  [INDEX.div]: HTMLDivElement;
  [INDEX.conditional]: HTMLDivElement;
  [INDEX.show]: Input["show"];
  [INDEX.value1]: Input["value1"];
  [INDEX.value2]: Input["value2"];
  ["___attrs"]: Input;
}>;

const enum INDEX_IF0 {
  comment0 = "#comment/0",
  conditional0 = "#comment/0",
  comment1 = "#comment/1",
  conditional1 = "#comment/1",
}

type If0Scope = Scope<{
  _: ComponentScope;
  [INDEX_IF0.comment0]: Comment;
  [INDEX_IF0.conditional0]: Comment;
  [INDEX_IF0.comment1]: Comment;
  [INDEX_IF0.conditional1]: Comment;
}>;

const enum INDEX_IF1 {
  text = "#text/0",
}

type If1Scope = Scope<{
  _: If0Scope;
  [INDEX_IF1.text]: Text;
}>;

const enum INDEX_IF2 {
  text = "#text/0",
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
  2,
  INDEX.value2,
  [],
  (scope: If2Scope, value: string) => {
    data(scope[INDEX_IF2.text], value);
  }
);

const value1$if1 = closure(
  2,
  INDEX.value1,
  [],
  (scope: If1Scope, value: string) => {
    data(scope[INDEX_IF1.text], value);
  }
);

const _if2 = conditional(INDEX_IF0.conditional1, 1, (scope: If0Scope) => {
  return scope._[INDEX.value2] ? ifBody2 : undefined;
});

const _if1 = conditional(INDEX_IF0.conditional0, 1, (scope: If0Scope) =>
  scope._[INDEX.value1] ? ifBody1 : undefined
);

const value2$if0 = closure(1, INDEX.value2, [
  _if2,
  inConditionalScope(value2$if2, INDEX_IF0.conditional1),
]);

const value1$if0 = closure(1, INDEX.value1, [
  _if1,
  inConditionalScope(value1$if1, INDEX_IF0.conditional0),
]);

const _if0 = conditionalOnlyChild(
  INDEX.conditional,
  1,
  (scope: ComponentScope) => (scope[INDEX.show] ? ifBody0 : undefined),
  dynamicFragment
);

export const value2_subscribers = [
  inConditionalScope(value2$if0, INDEX.conditional),
];

export const value1_subscribers = [
  inConditionalScope(value1$if0, INDEX.conditional),
];

export const show_subscribers = [_if0];

const _show = source(INDEX.show, show_subscribers);
const _value1 = source(INDEX.value1, value1_subscribers);
const _value2 = source(INDEX.value2, value2_subscribers);

export const attrs = destructureSources(
  [_show, _value1, _value2],
  (scope: ComponentScope, { show, value1, value2 }: Input) => {
    setSource(scope, _show, show);
    setSource(scope, _value1, value1);
    setSource(scope, _value2, value2);
  }
);

export default createRenderFn(template, walks, undefined, attrs);

const ifBody0 = createRenderer(
  "<!><!>",
  get + over(1) + get + over(1),
  undefined,
  [value1$if0, value2$if0],
  0,
  INDEX_IF0.conditional0,
  INDEX_IF0.conditional1
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
