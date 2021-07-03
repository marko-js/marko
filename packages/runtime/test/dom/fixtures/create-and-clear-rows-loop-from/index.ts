import {
  walk,
  data,
  setLoopFromTo,
  createRenderer,
  createRenderFn,
  isDirty,
  write,
  read,
  runForEach
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

const enum Index {
  INPUT_FROM = 0,
  INPUT_TO = 1,
  INPUT_STEP = 2,
  DIV = 3,
  LOOP = 3
}

type scope = {
  [Index.INPUT_FROM]: Input["from"];
  [Index.INPUT_TO]: Input["to"];
  [Index.INPUT_STEP]: Input["step"];
  [Index.DIV]: HTMLDivElement;
  [Index.LOOP]: HTMLDivElement;
};

// <div>
//   <for|child| from=input.from to=input.to step=input.step>
//     ${child.text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = get + over(1);
export const hydrate = () => {
  write(Index.DIV, walk());
};

export const execInputFromToStep = () => {
  setLoopFromTo(
    Index.LOOP,
    read<scope, Index.INPUT_FROM>(Index.INPUT_FROM),
    read<scope, Index.INPUT_TO>(Index.INPUT_TO),
    read<scope, Index.INPUT_STEP>(Index.INPUT_STEP),
    iter0
  );
  runForEach(Index.LOOP, iter0_execItem);
};

export const execDynamicInput = (input: Input) => {
  write(Index.INPUT_FROM, input.from);
  write(Index.INPUT_TO, input.to);
  write(Index.INPUT_STEP, input.step);
  execInputFromToStep();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

const enum Iter0Index {
  ITEM = 0,
  INDEX = 1,
  ALL = 2,
  TEXT = 3
}

type iterScope = [number, number, number[], Text];

const iter0 = createRenderer(
  " ",
  get + next(1),
  () => {
    write(Iter0Index.TEXT, walk());
  },
  0
);

const iter0_execItem = () => {
  if (isDirty(Iter0Index.ITEM)) {
    data(Iter0Index.TEXT, read(Iter0Index.ITEM));
  }
};
