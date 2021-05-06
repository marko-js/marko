import {
  walk,
  data,
  conditional,
  setConditionalRenderer,
  Conditional,
  Scope,
  set,
  createRenderer,
  createRenderFn,
  staticNodeMethods,
  dynamicFragmentMethods,
  checkDirty
} from "../../../../src/dom/index";
import { next, over, get } from "../../utils/walks";

export const inputs = [
  {
    show: false,
    value1: "Hello",
    value2: "World"
  },
  {
    show: true,
    value1: "Hello",
    value2: "World"
  },
  {
    show: true,
    value1: false,
    value2: "World"
  },
  {
    show: true,
    value1: "Goodbye",
    value2: "World"
  },
  {
    show: false,
    value1: "Goodbye",
    value2: "World"
  }
];

type Input = typeof inputs[number];

// <div>
//   <if=input.show>
//     <if=input.value1><span>${input.value1}</span></if>
//     <if=input.value2><span>${input.value2}</span></if>
//   </if>
// </div>

export const template = `<div><!></div>`;
export const walks = next(1) + get + over(1);
export const hydrate = (scope: Scope, offset: number) => {
  scope[offset + 3] = conditional(walk() as Comment, scope, offset);
};

export const execInputShowValue1Value2 = (scope: Scope, offset: number) => {
  const cond0 = scope[offset + 3] as Conditional;
  if (checkDirty(scope, offset)) {
    setConditionalRenderer(cond0, scope[offset] ? branch0 : undefined);
  }
  if (cond0.renderer === branch0) {
    const cond0_scope = cond0.scope;
    if (checkDirty(scope, offset) || checkDirty(scope, offset + 1)) {
      const cond0_0 = cond0_scope[0] as Conditional;
      setConditionalRenderer(
        cond0_0,
        scope[offset + 1] ? branch0_0 : undefined
      );
      if (cond0_0.renderer === branch0_0) {
        const cond0_0_scope = cond0_0.scope;
        data(cond0_0_scope[0] as Text, scope[offset + 1]);
      }
    }
    if (checkDirty(scope, offset) || checkDirty(scope, offset + 2)) {
      const cond0_1 = cond0_scope[1] as Conditional;
      setConditionalRenderer(
        cond0_1,
        scope[offset + 2] ? branch0_1 : undefined
      );
      if (cond0_1.renderer === branch0_1) {
        const cond0_1_scope = cond0_1.scope;
        data(cond0_1_scope[0] as Text, scope[offset + 2]);
      }
    }
  }
};

export const execDynamicInput = (
  input: Input,
  scope: Scope,
  offset: number
) => {
  set(scope, offset, input.show);
  set(scope, offset + 1, input.value1);
  set(scope, offset + 2, input.value2);
  execInputShowValue1Value2(scope, offset);
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const branch0 = createRenderer(
  "<!><!>",
  get + over(1) + get + over(1),
  (scope: Scope) => {
    scope[0] = conditional(walk() as Comment, scope, 0);
    scope[1] = conditional(walk() as Comment, scope, 0);
  },
  0,
  dynamicFragmentMethods,
  0,
  1
);

const branch0_0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  (scope: Scope) => {
    scope[0] = walk();
  },
  0,
  staticNodeMethods
);

// OPTIMIZATION: these two branches have the same renderer arguments
// so they could share the same renderer instance
const branch0_1 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  (scope: Scope) => {
    scope[0] = walk();
  },
  0,
  staticNodeMethods
);
