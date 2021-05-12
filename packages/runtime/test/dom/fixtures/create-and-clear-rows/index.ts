import {
  walk,
  data,
  loop,
  set,
  setLoopOf,
  Loop,
  Scope,
  createRenderer,
  createRenderFn,
  checkDirty,
  staticNodeMethods
} from "../../../../src/dom/index";
import { next, over, get } from "../../utils/walks";

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
    children: []
  },
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
  }
];

type Input = typeof inputs[number];

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = (scope: Scope, offset: number) => {
  scope[offset + 1] = loop(
    walk() as Comment,
    iter0,
    i => "" + (i as Input["children"][number]).id
  );
};

export const execInputChildren = (scope: Scope, offset: number) => {
  setLoopOf(scope[offset + 1] as Loop, scope[offset] as Input["children"]);
  for (const loopScope of scope[offset + 1] as Loop) {
    iter0_execItem(loopScope);
  }
};

export const execDynamicInput = (
  input: Input,
  scope: Scope,
  offset: number
) => {
  set(scope, offset, input.children);
  execInputChildren(scope, offset);
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const iter0 = createRenderer(
  " ",
  get + next(1),
  (scope: Scope) => {
    scope[3] = walk();
  },
  0,
  staticNodeMethods
);

const iter0_execItem = (scope: Scope) => {
  if (checkDirty(scope, 0)) {
    set(scope, 4, (scope[0] as Input["children"][number]).text);
    if (checkDirty(scope, 4)) {
      data(scope[3] as Text, scope[4]);
    }
  }
};
