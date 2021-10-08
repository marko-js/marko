import {
  data,
  read,
  write,
  setLoopIn,
  createRenderer,
  createRenderFn
} from "../../../../src/dom/index";
import { over, get, next, open, close, skip } from "../../utils/walks";

export const inputs = [
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c"
    }
  },
  {
    children: {}
  },
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c"
    }
  }
];

type Input = typeof inputs[number];

const enum Index {
  DIV = 0,
  LOOP = 0,
  INPUT_CHILDREN = 4
}

type scope = {
  [Index.DIV]: HTMLDivElement;
  [Index.LOOP]: HTMLDivElement;
  [Index.INPUT_CHILDREN]: Input["children"];
};

// <div>
//   <for|child| in=input.children>
//     ${child.text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = open(5) + get + over(1) + close;

export const execInputChildren = () => {
  setLoopIn(
    Index.LOOP,
    read<scope, Index.INPUT_CHILDREN>(Index.INPUT_CHILDREN),
    iter0,
    iter0_execItem
  );
};

export const execDynamicInput = (input: Input) => {
  if (write(Index.INPUT_CHILDREN, input.children)) {
    execInputChildren();
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum Iter0Index {
  ITEM = 0,
  INDEX = 1,
  ALL = 2,
  TEXT = 3,
  ITEM_TEXT = 4
}

type Entry<T> = NonNullable<{ [K in keyof T]: [K, T[K]] }[keyof T]>;
type Entries<T> = Entry<T>[];

type iterScope = [
  Entry<Input["children"]>,
  number,
  Entries<Input["children"]>,
  Text,
  string
];

const iter0 = createRenderer(
  " ",
  open(5) + skip(3) + get + next(1) + close,
  undefined,
  0
);

const iter0_execItem = () => {
  if (
    write(
      Iter0Index.ITEM_TEXT,
      read<iterScope, Iter0Index.ITEM>(Iter0Index.ITEM)[1]
    )
  ) {
    data(Iter0Index.TEXT, read(Iter0Index.ITEM_TEXT));
  }
};
