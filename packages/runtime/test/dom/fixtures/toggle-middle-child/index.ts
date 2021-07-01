import {
  walk,
  data,
  conditional,
  setConditionalRenderer,
  Conditional,
  Scope,
  read,
  write,
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
//   <span/>
//   <if=input.value>
//     <span>${input.value}</span>
//   </if>
//   <span/>
// </div>

export const template = `<div><span></span><!><span></span></div>`;
export const walks = next(2) + get + over(2);
export const hydrate = () => {
  write(Index.CONDITIONAL, conditional(walk() as Comment));
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
