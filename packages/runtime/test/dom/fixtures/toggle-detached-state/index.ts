import {
  data,
  read,
  write,
  queue,
  readInOwner,
  setConditionalRenderer,
  createRenderer,
  createRenderFn,
  queueInBranch
} from "../../../../src/dom/index";
import { next, get, over, open, close } from "../../utils/walks";

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
  CONDITIONAL = 0,
  INPUT_VISIBLE = 4,
  INPUT_VALUE = 5
}

type scope = {
  [Index.COMMENT]: Comment;
  [Index.CONDITIONAL]: Comment;
  [Index.INPUT_VISIBLE]: Input["visible"];
  [Index.INPUT_VALUE]: Input["value"];
};

// <div>
//   <if=input.visible>
//     <span>${input.value.name}</span>
//   </if>
// </div>

export const template = `<div><!></div>`;
export const walks = open(6) + next(1) + get + over(1) + close;

export const execInputVisible = () => {
  setConditionalRenderer(
    Index.CONDITIONAL,
    read(Index.INPUT_VISIBLE) ? branch0 : undefined
  );
};

export const execInputValue = () => {
  queueInBranch(
    Index.CONDITIONAL,
    branch0,
    execInputValueBranch0,
    Branch0Index.CLOSURE_VALUE
  );
};

function execInputValueBranch0() {
  data(
    Branch0Index.TEXT,
    readInOwner<scope, Index.INPUT_VALUE>(Index.INPUT_VALUE)!.name
  );
}

export const execDynamicInput = (input: typeof inputs[number]) => {
  if (write(Index.INPUT_VISIBLE, input.visible)) {
    execInputVisible();
  }
  if (write(Index.INPUT_VALUE, input.value)) {
    execInputValue();
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum Branch0Index {
  CLOSURE_VALUE = -1,
  TEXT = 0
}

type Branch0Scope = [Text];

const branch0 = createRenderer(
  "<span> </span>",
  open(1) + next(1) + get + next(1) + close,
  () => {
    queue(execInputValueBranch0, Branch0Index.CLOSURE_VALUE);
  },
  0
);
