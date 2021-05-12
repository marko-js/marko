import {
  walk,
  data,
  loop,
  set,
  setLoopFromTo,
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
    from: 0,
    to: 3,
    step: 1
  },
  {
    from: 0,
    to: -1,
    step: 1
  },
  {
    from: 0,
    to: 3,
    step: 1
  }
];

type Input = typeof inputs[number];

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = (scope: Scope, offset: number) => {
  scope[offset + 3] = loop(walk() as Comment, iter0, i => i);
};

export const execInputFromToStep = (scope: Scope, offset: number) => {
  setLoopFromTo(
    scope[offset + 3] as Loop,
    scope[offset] as Input["from"],
    scope[offset + 1] as Input["to"],
    scope[offset + 2] as Input["step"]
  );
  for (const loopScope of scope[offset + 3] as Loop) {
    iter0_execItem(loopScope);
  }
};

export const execDynamicInput = (
  input: Input,
  scope: Scope,
  offset: number
) => {
  set(scope, offset, input.from);
  set(scope, offset + 1, input.to);
  set(scope, offset + 2, input.step);
  execInputFromToStep(scope, offset);
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
    data(scope[3] as Text, scope[0]);
  }
};
