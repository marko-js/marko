import {
  walk,
  data,
  read,
  write,
  readInOwner,
  setConditionalRenderer,
  createRenderer,
  createRenderFn,
  runInBranch
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
  INPUT_VISIBLE = 0,
  INPUT_VALUE = 1,
  COMMENT = 2,
  CONDITIONAL = 2
}

type scope = {
  [Index.INPUT_VISIBLE]: Input["visible"];
  [Index.INPUT_VALUE]: Input["value"];
  [Index.COMMENT]: Comment;
  [Index.CONDITIONAL]: Comment;
};

// <div>
//   <if=input.visible>
//     <span>${input.value.name}</span>
//   </if>
// </div>

export const template = `<div><!></div>`;
export const walks = next(1) + get + over(1);
export const hydrate = () => {
  write(Index.COMMENT, walk());
};

export const execInputValue = () => {
  setConditionalRenderer(
    Index.CONDITIONAL,
    read(Index.INPUT_VISIBLE) ? branch0 : undefined
  );
  runInBranch(Index.CONDITIONAL, branch0, execInputBranch0);
};

function execInputBranch0() {
  data(
    Branch0Index.TEXT,
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
  0
);
