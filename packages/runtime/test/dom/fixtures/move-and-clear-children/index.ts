import {
  walk,
  data,
  loop,
  read,
  write,
  setLoopOf,
  Loop,
  runWithScope,
  createRenderer,
  createRenderFn,
  staticNodeMethods,
  isDirty
} from "../../../../src/dom/index";
import { get, next, over } from "../../utils/walks";

export const inputs = [
  {
    children: [
      {
        id: 1,
        text: "a"
      },
      {
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      }
    ]
  },
  {
    children: [
      {
        id: 2,
        text: "b"
      },
      {
        id: 3,
        text: "c"
      },
      {
        id: 1,
        text: "a"
      }
    ]
  },
  {
    children: []
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
//   <for|child| of=input.children by(c) { return c.id }>
//     ${child.text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = () => {
  write(
    Index.LOOP,
    loop(
      walk() as HTMLDivElement,
      iter0,
      i => "" + (i as Input["children"][number]).id
    )
  );
};

export const execInputChildren = () => {
  setLoopOf(
    read<scope, Index.LOOP>(Index.LOOP),
    read<scope, Index.INPUT_CHILDREN>(Index.INPUT_CHILDREN)
  );
  for (const loopScope of read<scope, Index.LOOP>(Index.LOOP)) {
    runWithScope(iter0_execItem, 0, loopScope);
  }
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

type iterScope = [
  Input["children"][number],
  number,
  Input["children"],
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
      read<iterScope, Iter0Index.ITEM>(Iter0Index.ITEM).text
    );
    if (isDirty(Iter0Index.ITEM_TEXT)) {
      data(
        read<iterScope, Iter0Index.TEXT>(Iter0Index.TEXT),
        read(Iter0Index.ITEM_TEXT)
      );
    }
  }
};
