import {
  walk,
  data,
  conditional,
  setConditionalRenderer,
  Conditional,
  createRenderer,
  createRenderFn,
  staticNodeMethods,
  dynamicFragmentMethods,
  write,
  isDirty,
  read,
  readInOwner,
  isDirtyInOwner,
  runInBranch
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

const enum Index {
  INPUT_SHOW = 1,
  INPUT_VALUE1 = 2,
  INPUT_VALUE2 = 3,
  CONDITIONAL = 4
}

type scope = {
  [Index.INPUT_SHOW]: Input["show"];
  [Index.INPUT_VALUE1]: Input["value1"];
  [Index.INPUT_VALUE2]: Input["value2"];
  [Index.CONDITIONAL]: Conditional;
};

// <div>
//   <if=input.show>
//     <if=input.value1><span>${input.value1}</span></if>
//     <if=input.value2><span>${input.value2}</span></if>
//   </if>
// </div>

export const template = `<div><!></div>`;
export const walks = next(1) + get + over(1);
export const hydrate = () => {
  write(Index.CONDITIONAL, conditional(walk() as Comment));
};

export const execInputShowValue1Value2 = () => {
  if (isDirty(Index.INPUT_SHOW)) {
    setConditionalRenderer(
      Index.CONDITIONAL,
      read(Index.INPUT_SHOW) ? branch0 : undefined
    );
  }
  runInBranch(Index.CONDITIONAL, branch0, execInputShowValue1Value2Branch0);
};

const execInputShowValue1Value2Branch0 = () => {
  if (isDirtyInOwner(Index.INPUT_SHOW) || isDirtyInOwner(Index.INPUT_VALUE1)) {
    setConditionalRenderer(
      Branch0Index.COND1,
      readInOwner(Index.INPUT_VALUE1) ? branch0_0 : undefined
    );
    runInBranch(Branch0Index.COND1, branch0_0, execInputValue1Branch0_0);
  }
  if (isDirtyInOwner(Index.INPUT_SHOW) || isDirtyInOwner(Index.INPUT_VALUE2)) {
    setConditionalRenderer(
      Branch0Index.COND2,
      readInOwner(Index.INPUT_VALUE2) ? branch0_1 : undefined
    );
    runInBranch(Branch0Index.COND2, branch0_1, execInputValue2Branch0_1);
  }
};

const execInputValue1Branch0_0 = () => {
  data(Branch0_0Index.TEXT, readInOwner(Index.INPUT_VALUE1, 2));
};

const execInputValue2Branch0_1 = () => {
  data(Branch0_1Index.TEXT, readInOwner(Index.INPUT_VALUE2, 2));
};

export const execDynamicInput = (input: Input) => {
  write(Index.INPUT_SHOW, input.show);
  write(Index.INPUT_VALUE1, input.value1);
  write(Index.INPUT_VALUE2, input.value2);
  execInputShowValue1Value2();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const enum Branch0Index {
  COND1 = 0,
  COND2 = 1
}

type Branch0Scope = [Conditional, Conditional];

const branch0 = createRenderer(
  "<!><!>",
  get + over(1) + get + over(1),
  () => {
    write(Branch0Index.COND1, conditional(walk() as Comment));
    write(Branch0Index.COND2, conditional(walk() as Comment));
  },
  0,
  dynamicFragmentMethods,
  0,
  0,
  1
);

const enum Branch0_0Index {
  TEXT = 0
}

type Branch0_0Scope = [Text];

const branch0_0 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  () => {
    write(Branch0_0Index.TEXT, walk());
  },
  0,
  staticNodeMethods
);

const enum Branch0_1Index {
  TEXT = 0
}

type Branch0_1Scope = [Text];

// OPTIMIZATION: these two branches have the same renderer arguments
// so they could share the same renderer instance
const branch0_1 = createRenderer(
  "<span> </span>",
  next(1) + get + next(1),
  () => {
    write(Branch0_1Index.TEXT, walk());
  },
  0,
  staticNodeMethods
);
