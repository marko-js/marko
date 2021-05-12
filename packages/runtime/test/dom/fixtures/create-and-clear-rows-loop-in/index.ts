import {
  walk,
  data,
  loop,
  set,
  setLoopIn,
  Loop,
  Scope,
  createRenderer,
  createRenderFn,
  checkDirty,
  staticNodeMethods
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

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = (scope: Scope, offset: number) => {
  scope[offset + 1] = loop(
    walk() as Comment,
    iter0,
    ([k]) => k as keyof Input["children"]
  );
};

export const execInputChildren = (scope: Scope, offset: number) => {
  setLoopIn(scope[offset + 1] as Loop, scope[offset] as Input["children"]);
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
    set(scope, 4, (scope[0] as any)[1]);
    if (checkDirty(scope, 4)) {
      data(scope[3] as Text, scope[4]);
    }
  }
};
