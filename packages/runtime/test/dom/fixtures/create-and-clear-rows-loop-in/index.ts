import {
  walk,
  data,
  loop,
  read,
  write,
  setLoopIn,
  Loop,
  createRenderer,
  createRenderFn,
  isDirty,
  staticNodeMethods,
  runForEach
} from "../../../../src/dom/index";
import { over, get, next } from "../../utils/walks";

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
  INPUT_CHILDREN = 1,
  LOOP = 2
}

type scope = {
  [Index.DIV]: HTMLDivElement;
  [Index.INPUT_CHILDREN]: Input["children"];
  [Index.LOOP]: Loop;
};

// <div>
//   <for|child| in=input.children>
//     ${child.text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = () => {
  write(
    Index.LOOP,
    loop(walk() as HTMLDivElement, iter0, item => item[0])
  );
};

export const execInputChildren = () => {
  setLoopIn(
    Index.LOOP,
    read<scope, Index.INPUT_CHILDREN>(Index.INPUT_CHILDREN)
  );
  runForEach(Index.LOOP, iter0_execItem);
};

export const execDynamicInput = (input: Input) => {
  write(Index.INPUT_CHILDREN, input.children);
  execInputChildren();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const enum Iter0Index {
  ITEM = 0,
  INDEX = 1,
  ALL = 2,
  TEXT = 3,
  ITEM_TEXT = 4
}

type Entry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
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
  get + next(1),
  () => {
    write(Iter0Index.TEXT, walk());
  },
  0,
  staticNodeMethods
);

const iter0_execItem = () => {
  if (isDirty(Iter0Index.ITEM)) {
    write(
      Iter0Index.ITEM_TEXT,
      read<iterScope, Iter0Index.ITEM>(Iter0Index.ITEM)[1]
    );
    if (isDirty(Iter0Index.ITEM_TEXT)) {
      data(Iter0Index.TEXT, read(Iter0Index.ITEM_TEXT));
    }
  }
};
