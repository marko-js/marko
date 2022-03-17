import {
  data,
  write,
  setLoopIn,
  createRenderer,
  createRenderFn,
  Scope,
} from "../../../dom/index";
import { over, get, next } from "../../utils/walks";

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

type ComponentScope = Scope<{
  [Index.DIV]: HTMLDivElement;
  [Index.LOOP]: HTMLDivElement;
  [Index.INPUT_CHILDREN]: Input["children"];
}>;

// <div>
//   <for|key, child| in=input.children>
//     ${child}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);

export const execInputChildren = (scope: ComponentScope) => {
  setLoopIn(
    scope,
    Index.LOOP,
    scope[Index.INPUT_CHILDREN] as Input["children"],
    iter0,
    iter0_execItem as any
  );
};

export const execDynamicInput = (scope: ComponentScope, input: Input) => {
  if (write(scope, Index.INPUT_CHILDREN, input.children)) {
    execInputChildren(scope);
  }
};

export default createRenderFn(template, walks, undefined, execDynamicInput);

const enum Iter0Index {
  TEXT = 0,
  CHILD = 1,
}

type Entry<T> = NonNullable<{ [K in keyof T]: [K, T[K]] }[keyof T]>;

type IterScope = Scope<{
  _: ComponentScope;
  [Iter0Index.TEXT]: Text;
  [Iter0Index.CHILD]: Entry<Input["children"]>[0];
}>;

const iter0 = createRenderer(" ", get + next(1), undefined, 0);

const iter0_execItem = (
  scope: IterScope,
  [, child]: Entry<Input["children"]>
) => {
  if (write(scope, Iter0Index.CHILD, child)) {
    data(scope, Iter0Index.TEXT, child);
  }
};
