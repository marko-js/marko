import {
  data,
  setConditionalRenderer,
  write,
  createRenderer,
  createRenderFn,
  queueInBranch,
  Scope,
} from "../../../dom/index";
import { next, over, get } from "../../utils/walks";

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
  value = 4,
}

const enum PRIORITY {
  value = 0,
  closure_value = 1,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.value]: typeof inputs[number]["value"];
}>;

// <attrs/{ value }/>
// <div>
//   <span/>
//   <span/>
//   <if=value>
//     <span>${value}</span>
//   </if>
// </div>

export const template = `<div><span></span><span></span><!></div>`;
export const walks = next(3) + get + over(1);

export const _apply_value = (scope: ComponentScope) => {
  setConditionalRenderer(
    scope,
    INDEX.conditional,
    scope[INDEX.value] ? branch0 : undefined
  );
  queueInBranch(
    scope,
    INDEX.conditional,
    branch0,
    _apply_value2,
    PRIORITY_BRANCH0.value,
    PRIORITY.closure_value
  );
};

function _apply_value2(scope: Branch0Scope) {
  data(scope[INDEX_BRANCH0.text], scope._[INDEX.value]);
}

export const _applyAttrs = (
  scope: ComponentScope,
  input: typeof inputs[number]
) => {
  if (write(scope, INDEX.value, input.value)) {
    _apply_value(scope);
  }
};

export default createRenderFn(template, walks, undefined, _applyAttrs);

const enum INDEX_BRANCH0 {
  text = 0,
}

const enum PRIORITY_BRANCH0 {
  value = 0,
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [INDEX_BRANCH0.text]: Text;
}>;

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  undefined, // optimization (value will always be set in _apply_value)
  0
);
