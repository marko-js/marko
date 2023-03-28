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
  value,
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

// type If2Scope = Scope<{
//   _: If0Scope;
//   [INDEX_IF2.text]: Text;
// }>;

// <attrs/{show, value1, value2}/>
// <div>
//   <if=show>
//     <if=value1><span>${value1}</span></if>
//     <if=value2><span>${value2}</span></if>
//   </if>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);

export const attrs = (scope: Scope, input: Input, dirty?: null | boolean) => {
  let show, value1, value2;
  if (dirty) {
    ({ show, value1, value2 } = input);
  }
  _show(scope, show, dirty);
  _value1(scope, value1, dirty);
  _value2(scope, value2, dirty);
};

const _show = value(INDEX.show, (scope, value, dirty) => {
  _if0(scope, value ? ifBody0 : undefined, dirty);
});
const _value1 = value(INDEX.value1, (scope, _value, dirty) => {
  inConditionalScope(scope, dirty!, value1$if0, INDEX.conditional);
});
const _value2 = value(INDEX.value2, (scope, _value, dirty) => {
  inConditionalScope(scope, dirty!, value2$if0, INDEX.conditional);
});

const _if0 = conditionalOnlyChild(INDEX.conditional);

const value1$if0 = closure(INDEX.value1, (scope, value, dirty) => {
  _if1(scope, value ? ifBody1 : undefined, dirty);
  inConditionalScope(scope, dirty!, value1$if1, INDEX_IF0.conditional0);
});

const value2$if0 = closure(INDEX.value2, (scope, value, dirty) => {
  _if2(scope, value ? ifBody2 : undefined, dirty);
  inConditionalScope(scope, dirty!, value2$if2, INDEX_IF0.conditional1);
});

const _if1 = conditional(INDEX_IF0.conditional0);

const value1$if1 = closure(
  INDEX.value1,
  (scope, value: string) => {
    data(scope[INDEX_IF1.text], value);
  },
  (scope) => {
    return (scope as If1Scope)._._;
  }
);

const _if2 = conditional(INDEX_IF0.conditional1);

const value2$if2 = closure(
  INDEX.value2,
  (scope, value: string) => {
    data(scope[INDEX_IF2.text], value);
  },
  (scope) => {
    return (scope as If1Scope)._._;
  }
);

export default createRenderFn(template, walks, undefined, attrs);

const ifBody0 = createRenderer(
  "<!><!>",
  get + over(1) + get + over(1),
  undefined,
  [value1$if0, value2$if0],
  0,
  dynamicFragment,
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
