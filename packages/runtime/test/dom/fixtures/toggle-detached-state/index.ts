import {
  walk,
  data,
  read,
  write,
  readInOwner,
  conditional,
  setConditionalRenderer,
  Conditional,
  createRenderer,
  createRenderFn,
  staticNodeMethods,
  runWithScope
} from "../../../../src/dom/index";
import { next, get, over } from "../../utils/walks";

export const inputs = [
  {
    value: { name: "Jack" },
    visible: true
  },
  {
    value: undefined,
    visible: false
  },
  {
    value: { name: "Jake" },
    visible: true
  }
];

type Input = typeof inputs[number];

const enum Index {
  COMMENT = 0,
  INPUT_VISIBLE = 1,
  INPUT_VALUE = 2,
  CONDITIONAL = 3
}

type scope = {
  [Index.COMMENT]: Comment;
  [Index.INPUT_VISIBLE]: Input["visible"];
  [Index.INPUT_VALUE]: Input["value"];
  [Index.CONDITIONAL]: Conditional;
};

// <div>
//   <if=input.visible>
//     <span>${input.value.name}</span>
//   </if>
// </div>

export const template = `<div><!></div>`;
export const walks = next(1) + get + over(1);
export const hydrate = () => {
  write(Index.CONDITIONAL, conditional(walk() as Comment));
};

export const execInputValue = () => {
  const cond0 = read<scope, Index.CONDITIONAL>(Index.CONDITIONAL);
  setConditionalRenderer(
    cond0,
    read(Index.INPUT_VISIBLE) ? branch0 : undefined
  );
  if (cond0.renderer === branch0) {
    runWithScope(execInputBranch0, 0, cond0.scope);
  }
};

function execInputBranch0() {
  data(
    read<Branch0Scope, Branch0Index.TEXT>(Branch0Index.TEXT),
    readInOwner<scope, Index.INPUT_VALUE>(Index.INPUT_VALUE).name
  );
}

export const execDynamicInput = (input: typeof inputs[number]) => {
  write(Index.INPUT_VISIBLE, input.visible);
  write(Index.INPUT_VALUE, input.value);
  execInputValue();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const enum Branch0Index {
  TEXT = 0
}

type Branch0Scope = [Text];

const branch0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  () => {
    write(Branch0Index.TEXT, walk());
  },
  0,
  staticNodeMethods
);
