import {
  closure,
  conditionalOnlyChild,
  createRenderer,
  createTemplate,
  data,
  inConditionalScope,
  intersections,
  type Scope,
  value,
} from "@marko/runtime-tags/dom";

import { get, next, over } from "../../utils/walks";
import type { steps } from "./test";

type Input = (typeof steps)[number];

const enum INDEX {
  div = "#div/0",
  conditional = "#div/0",
  value = "value",
}

// type ComponentScope = Scope<{
//   [INDEX.div]: HTMLDivElement;
//   [INDEX.conditional]: HTMLDivElement;
//   [INDEX.value]: Input["value"];
// }>;

const enum INDEX_BRANCH0 {
  text = "#text/0",
  value = "value",
}

// type Branch0Scope = Scope<{
//   _: ComponentScope;
//   [INDEX_BRANCH0.text]: Text;
// }>;

// <attrs/{ value }/>
// <div>
//   <if=value>
//     <span>${value}</span>
//   </if>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);

const value$if = closure(INDEX.value, (scope: Scope, value: string) => {
  data(scope[INDEX_BRANCH0.text], value);
});

const _if = conditionalOnlyChild(INDEX.conditional);

const _value = value(
  INDEX.value,
  (scope, value) => {
    _if(scope, value ? _ifBody : undefined);
  },
  intersections([inConditionalScope(value$if, INDEX.conditional), _if]),
);

export const args = (
  scope: Scope,
  _destructure: [Input],
) => {
  let value;
  try {
    [{ value }] = _destructure;
  } catch {
    // TODO: this is a really bad hack because I'm lazy 
    // and we shouldn't be manually compiling this test anyways
  }
  _value(scope, value ?? _destructure);
};

export default createTemplate(
  createRenderer(
    template,
    walks,
    undefined,
    undefined,
    undefined,
    args as any,
  ),
);

const _ifBody = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined, // optimization (value will always be set in _apply_value),
  [value$if],
);
