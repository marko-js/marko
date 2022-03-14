import {
  data,
  setConditionalRenderer,
  createRenderer,
  createRenderFn,
  dynamicFragment,
  write,
  queue,
  queueInBranch,
  Scope,
} from "../../../dom/index";
import { next, over, get, open, close, skip } from "../../utils/walks";

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
  show = 4,
  value1 = 5,
  value2 = 6,
}

const enum PRIORITY {
  show = 0,
  value1 = 1,
  value2 = 2,
  closure_value1 = 3,
  closure_value2 = 4,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.show]: Input["show"];
  [INDEX.value1]: Input["value1"];
  [INDEX.value2]: Input["value2"];
}>;

// <attrs/{show, value1, value2}/>
// <div>
//   <if=show>
//     <if=value1><span>${value1}</span></if>
//     <if=value2><span>${value2}</span></if>
//   </if>
// </div>

export const template = `<div><!></div>`;
export const walks = open(7) + next(1) + get + over(1) + close;

export const _apply_show = (scope: ComponentScope) => {
  setConditionalRenderer(
    scope,
    INDEX.conditional,
    scope[INDEX.show] ? branch0 : undefined,
    dynamicFragment
  );
};

export const _apply_value1 = (scope: ComponentScope) => {
  queueInBranch(
    scope,
    INDEX.conditional,
    branch0,
    execInputValue1Branch0,
    PRIORITY_BRANCH0.value1,
    PRIORITY.closure_value1
  );
};

export const execInputValue1Branch0 = (scope: Branch0Scope) => {
  setConditionalRenderer(
    scope,
    INDEX_BRANCH0.conditional1,
    scope._[INDEX.value1] ? branch0_0 : undefined
  );
  queueInBranch(
    scope,
    INDEX_BRANCH0.conditional1,
    branch0_0,
    execInputValue1Branch0_0,
    PRIORITY_BRANCH0_0.value1,
    PRIORITY_BRANCH0.closure_value1
  );
};

export const execInputValue2 = (scope: ComponentScope) => {
  queueInBranch(
    scope,
    INDEX.conditional,
    branch0,
    execInputValue2Branch0,
    PRIORITY_BRANCH0.value2,
    PRIORITY.closure_value2
  );
};

export const execInputValue2Branch0 = (scope: Branch0Scope) => {
  setConditionalRenderer(
    scope,
    INDEX_BRANCH0.conditional2,
    scope._[INDEX.value2] ? branch0_1 : undefined
  );
  queueInBranch(
    scope,
    INDEX_BRANCH0.conditional2,
    branch0_1,
    execInputValue2Branch0_1,
    PRIORITY_BRANCH0_1.value2,
    PRIORITY_BRANCH0.closure_value2
  );
};

const execInputValue1Branch0_0 = (scope: Branch0_0Scope) => {
  data(scope, INDEX_BRANCH0_0.text, scope._._[INDEX.value1]);
};

const execInputValue2Branch0_1 = (scope: Branch0_1Scope) => {
  data(scope, INDEX_BRANCH0_1.text, scope._._[INDEX.value2]);
};

export const execDynamicInput = (scope: ComponentScope, input: Input) => {
  write(scope, INDEX.show, input.show) && _apply_show(scope);
  write(scope, INDEX.value1, input.value1) && _apply_value1(scope);
  write(scope, INDEX.value2, input.value2) && execInputValue2(scope);
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum INDEX_BRANCH0 {
  comment1 = 0,
  conditional1 = 0,
  comment2 = 4,
  conditional2 = 4,
}

const enum PRIORITY_BRANCH0 {
  value1 = 0,
  value2 = 1,
  closure_value1 = 2,
  closure_value2 = 3,
}

type Branch0Scope = Scope<{
  _: ComponentScope;
  [INDEX_BRANCH0.comment1]: Comment;
  [INDEX_BRANCH0.conditional1]: Comment;
  [INDEX_BRANCH0.comment2]: Comment;
  [INDEX_BRANCH0.conditional2]: Comment;
}>;

const branch0 = createRenderer(
  "<!><!>",
  open(8) + get + over(1) + skip(3) + get + over(1) + close,
  (scope: Branch0Scope) => {
    queue(scope, execInputValue1Branch0, PRIORITY_BRANCH0.value1);
    queue(scope, execInputValue2Branch0, PRIORITY_BRANCH0.value2);
  },
  0,
  0,
  0,
  4
);

const enum INDEX_BRANCH0_0 {
  text = 0,
}

const enum PRIORITY_BRANCH0_0 {
  value1 = 0,
}

type Branch0_0Scope = Scope<{
  _: Branch0Scope;
  [INDEX_BRANCH0_0.text]: Text;
}>;

const branch0_0 = createRenderer(
  "<span> </span>",
  open(1) + next(1) + get + next(1) + close,
  undefined,
  0
);

const enum INDEX_BRANCH0_1 {
  text = 0,
}

const enum PRIORITY_BRANCH0_1 {
  value2 = 1,
}

type Branch0_1Scope = Scope<{
  _: Branch0Scope;
  [INDEX_BRANCH0_1.text]: Text;
}>;

// OPTIMIZATION: these two branches have the same renderer arguments
// so they could share the same renderer instance
const branch0_1 = createRenderer(
  "<span> </span>",
  open(1) + next(1) + get + next(1) + close,
  undefined,
  0
);
