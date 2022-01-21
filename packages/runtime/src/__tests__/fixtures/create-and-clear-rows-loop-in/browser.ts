import {
  data,
  read,
  write,
  setLoopIn,
  createRenderer,
  createRenderFn,
} from "../../../dom/index";
import { over, get, next, open, close } from "../../utils/walks";

export const inputs = [
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c",
    },
  },
  {
    children: {},
  },
  {
    children: {
      "1": "a",
      "2": "b",
      "3": "c",
    },
  },
];

type Input = typeof inputs[number];

const enum Index {
  DIV = 0,
  LOOP = 0,
  INPUT_CHILDREN = 4,
}

type scope = {
  [Index.DIV]: HTMLDivElement;
  [Index.LOOP]: HTMLDivElement;
  [Index.INPUT_CHILDREN]: Input["children"];
};

// <div>
//   <for|key, child| in=input.children>
//     ${child}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = open(5) + get + over(1) + close;

export const execInputChildren = () => {
  setLoopIn(
    Index.LOOP,
    read<scope, Index.INPUT_CHILDREN>(Index.INPUT_CHILDREN),
    iter0,
    iter0_execItem as any
  );
};

export const execDynamicInput = (input: Input) => {
  if (write(Index.INPUT_CHILDREN, input.children)) {
    execInputChildren();
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum Iter0Index {
  TEXT = 0,
  CHILD = 1,
}

type Entry<T> = NonNullable<{ [K in keyof T]: [K, T[K]] }[keyof T]>;

// type iterScope = [Text, Entry<Input["children"]>[0]];

const iter0 = createRenderer(
  " ",
  open(5) + get + next(1) + close,
  undefined,
  0
);

const iter0_execItem = ([, child]: Entry<Input["children"]>) => {
  if (write(Iter0Index.CHILD, child)) {
    data(Iter0Index.TEXT, child);
  }
};
