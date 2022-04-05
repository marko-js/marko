import {
  data,
  setLoopFromTo,
  createRenderer,
  createRenderFn,
  write,
  Scope,
} from "../../../dom/index";
import { over, get, next } from "../../utils/walks";

export const inputs = [
  {
    from: 0,
    to: 3,
    step: 1,
  },
  {
    from: 0,
    to: -1,
    step: 1,
  },
  {
    from: 0,
    to: 3,
    step: 1,
  },
];

type Input = typeof inputs[number];

const enum Index {
  DIV = 0,
  LOOP = 0,
  INPUT_FROM = 4,
  INPUT_TO = 5,
  INPUT_STEP = 6,
}

type ComponentScope = Scope<{
  [Index.DIV]: HTMLDivElement;
  [Index.LOOP]: HTMLDivElement;
  [Index.INPUT_FROM]: Input["from"];
  [Index.INPUT_TO]: Input["to"];
  [Index.INPUT_STEP]: Input["step"];
}>;

// <div>
//   <for|child| from=input.from to=input.to step=input.step>
//     ${child.text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);

export const execInputFromToStep = (scope: ComponentScope) => {
  setLoopFromTo(
    scope,
    Index.LOOP,
    scope[Index.INPUT_FROM] as number,
    scope[Index.INPUT_TO] as number,
    scope[Index.INPUT_STEP] as number,
    iter0,
    iter0_execItem
  );
};

export const execDynamicInput = (scope: ComponentScope, input: Input) => {
  write(scope, Index.INPUT_FROM, input.from);
  write(scope, Index.INPUT_TO, input.to);
  write(scope, Index.INPUT_STEP, input.step);
  execInputFromToStep(scope);
};

export default createRenderFn(template, walks, undefined, execDynamicInput);

const enum Iter0Index {
  TEXT = 0,
  ITEM = 1,
}

type IterScope = Scope<{
  _: ComponentScope;
  [Iter0Index.TEXT]: Text;
  [Iter0Index.ITEM]: number;
}>;

const iter0 = createRenderer(" ", get + next(1), undefined, 0);

const iter0_execItem = (scope: IterScope, item: number) => {
  if (write(scope, Iter0Index.ITEM, item)) {
    data(scope[Iter0Index.TEXT], item);
  }
};
