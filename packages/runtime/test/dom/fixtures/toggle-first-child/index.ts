import {
  walk,
  data,
  conditional,
  setConditionalRenderer,
  Conditional,
  Scope,
  write,
  read,
  createRenderer,
  createRenderFn,
  staticNodeMethods
} from "../../../../src/dom/index";
import { next, over, get } from "../../utils/walks";

export const inputs = [
  {
    value: "Hello"
  },
  {
    value: false
  },
  {
    value: "World"
  },
  {
    value: "!"
  }
];

const enum Index {
  COMMENT = 0,
  INPUT_VALUE = 1,
  CONDITIONAL = 2
}

type scope = {
  [Index.COMMENT]: Comment;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
  [Index.CONDITIONAL]: Conditional;
};

// <div>
//   <if=input.value>
//     <span>${input.value}</span>
//   </if>
//   <span/>
//   <span/>
// </div>

export const template = `<div><!><span></span><span></span></div>`;
export const walks = next(1) + get + over(3);
export const hydrate = (scope: Scope, offset: number) => {
  write(Index.CONDITIONAL, conditional(walk() as Comment, scope, offset));
};

export const execInputValue = () => {
  const cond0 = read<scope, Index.CONDITIONAL>(Index.CONDITIONAL);
  setConditionalRenderer(cond0, read(Index.INPUT_VALUE) ? branch0 : undefined);
  if (cond0.renderer === branch0) {
    const cond0_scope = cond0.scope;
    data(cond0_scope[0] as Text, read(Index.INPUT_VALUE));
  }
};

export const execDynamicInput = (input: typeof inputs[number]) => {
  write(Index.INPUT_VALUE, input.value);
  execInputValue();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const enum Branch0Index {
  TEXT = 0
}

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  () => {
    write(Branch0Index.TEXT, walk());
  },
  0,
  staticNodeMethods
);
