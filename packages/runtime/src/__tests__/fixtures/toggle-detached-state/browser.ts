import {
  data,
  write,
  queue,
  setConditionalRenderer,
  createRenderer,
  createRenderFn,
  queueInBranch,
  Scope,
} from "../../../dom/index";
import { next, get, over, open, close } from "../../utils/walks";

export const inputs = [
  {
    value: { name: "Jack" },
    visible: true,
  },
  {
    value: undefined,
    visible: false,
  },
  {
    value: { name: "Jake" },
    visible: true,
  },
];

type Input = typeof inputs[number];

const enum INDEX {
  comment = 0,
  conditional = 0,
  visible = 4,
  value = 5,
}

const enum PRIORITY {
  visible = 0,
  value = 1,
  closure_value = 2,
}

type ComponentScope = Scope<{
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.visible]: Input["visible"];
  [INDEX.value]: Input["value"];
}>;

// <attrs/{ visible, value }/>
// <div>
//   <if=visible>
//     <span>${value.name}</span>
//   </if>
// </div>

export const template = `<div><!></div>`;
export const walks = open(6) + next(1) + get + over(1) + close;

export const execInputVisible = (scope: ComponentScope) => {
  setConditionalRenderer(
    scope,
    INDEX.conditional,
    scope[INDEX.visible] ? branch0 : undefined
  );
};

export const execInputValue = (scope: ComponentScope) => {
  queueInBranch(
    scope,
    INDEX.conditional,
    branch0,
    execInputValueBranch0,
    PRIORITY_BRANCH0.value,
    PRIORITY.closure_value
  );
};

function execInputValueBranch0(scope: Branch0Scope) {
  data(scope, INDEX_BRANCH0.text, scope._[INDEX.value]!.name);
}

export const execDynamicInput = (
  scope: ComponentScope,
  input: typeof inputs[number]
) => {
  if (write(scope, INDEX.visible, input.visible)) {
    execInputVisible(scope);
  }
  if (write(scope, INDEX.value, input.value)) {
    execInputValue(scope);
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

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
  open(1) + next(1) + get + next(1) + close,
  (scope: Branch0Scope) => {
    queue(scope, execInputValueBranch0, PRIORITY_BRANCH0.value);
  },
  0
);
