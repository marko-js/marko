import {
  data,
  setConditionalRenderer,
  read,
  write,
  createRenderer,
  createRenderFn,
  readInOwner,
  queueInBranch,
} from "../../../dom/index";
import { next, over, get, open, close } from "../../utils/walks";

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

type SCOPE = {
  [INDEX.comment]: Comment;
  [INDEX.conditional]: Comment;
  [INDEX.value]: typeof inputs[number]["value"];
};

// <attrs/{ value }/>
// <div>
//   <span/>
//   <span/>
//   <if=value>
//     <span>${value}</span>
//   </if>
// </div>

export const template = `<div><span></span><span></span><!></div>`;
export const walks = open(5) + next(3) + get + over(1) + close;

export const _apply_value = () => {
  setConditionalRenderer(
    INDEX.conditional,
    read(INDEX.value) ? branch0 : undefined
  );
  queueInBranch(
    INDEX.conditional,
    branch0,
    _apply_value2,
    PRIORITY_BRANCH0.value,
    PRIORITY.closure_value
  );
};

function _apply_value2() {
  data(INDEX_BRANCH0.text, readInOwner<SCOPE, INDEX.value>(INDEX.value));
}

export const _applyAttrs = (input: typeof inputs[number]) => {
  if (write(INDEX.value, input.value)) {
    _apply_value();
  }
};

export default createRenderFn(template, walks, undefined, 0, _applyAttrs);

const enum INDEX_BRANCH0 {
  text = 0,
}

const enum PRIORITY_BRANCH0 {
  value = 0,
}

// type Branch0Scope = {
//   [Branch0Index.TEXT]: Text
// };

const branch0 = createRenderer(
  "<span> </span>",
  open(1) + next(1) + get + next(1) + close,
  undefined, // optimization (value will always be set in _apply_value)
  0
);
