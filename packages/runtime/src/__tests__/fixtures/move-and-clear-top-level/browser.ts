import {
  data,
  write,
  setLoopOf,
  createRenderer,
  createRenderFn,
  Scope,
} from "../../../dom/index";
import { open, close, next, over, get } from "../../utils/walks";

export const inputs = [
  {
    children: [
      {
        id: 1,
        text: "a",
      },
      {
        id: 2,
        text: "b",
      },
      {
        id: 3,
        text: "c",
      },
    ],
  },
  {
    children: [],
  },
  {
    children: [
      {
        id: 1,
        text: "a",
      },
      {
        id: 2,
        text: "b",
      },
      {
        id: 3,
        text: "c",
      },
    ],
  },
];

type Input = typeof inputs[number];

const enum Index {
  COMMENT = 0,
  LOOP = 0,
  INPUT_CHILDREN = 4,
}

type ComponentScope = Scope<{
  [Index.COMMENT]: Comment;
  [Index.LOOP]: Comment;
  [Index.INPUT_CHILDREN]: Input["children"];
}>;

// <for|child| of=input.children by(c) { return c.id }>
//   ${child.text}
// </for>

export const template = `<!>`;
export const walks = open(5) + get + over(1) + close;

export const execInputChildren = (scope: ComponentScope) => {
  setLoopOf(
    scope,
    Index.LOOP,
    scope[Index.INPUT_CHILDREN] as Input["children"],
    iter0,
    (i) => "" + (i as Input["children"][number]).id,
    iter0_execItem
  );
};

export const execDynamicInput = (scope: ComponentScope, input: Input) => {
  if (write(scope, Index.INPUT_CHILDREN, input.children)) {
    execInputChildren(scope);
  }
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum Iter0Index {
  TEXT = 0,
  ITEM = 1,
}

type IterScope = Scope<{
  _: ComponentScope;
  [Iter0Index.TEXT]: Text;
  [Iter0Index.ITEM]: Input["children"][number];
}>;

const iter0 = createRenderer(
  " ",
  open(5) + get + next(1) + close,
  undefined,
  0
);

const iter0_execItem = (scope: IterScope, item: Input["children"][number]) => {
  if (write(scope, Iter0Index.ITEM, item)) {
    data(scope, Iter0Index.TEXT, item.text);
  }
};
