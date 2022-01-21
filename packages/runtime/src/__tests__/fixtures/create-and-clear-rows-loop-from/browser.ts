import {
  data,
  setLoopFromTo,
  createRenderer,
  createRenderFn,
  write,
  read,
} from "../../../dom/index";
import { over, get, next, open, close } from "../../utils/walks";

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

type scope = {
  [Index.DIV]: HTMLDivElement;
  [Index.LOOP]: HTMLDivElement;
  [Index.INPUT_FROM]: Input["from"];
  [Index.INPUT_TO]: Input["to"];
  [Index.INPUT_STEP]: Input["step"];
};

// <div>
//   <for|child| from=input.from to=input.to step=input.step>
//     ${child.text}
//   </for>
// </div>

export const template = `<div></div>`;
export const walks = open(7) + get + over(1) + close;

export const execInputFromToStep = () => {
  setLoopFromTo(
    Index.LOOP,
    read<scope, Index.INPUT_FROM>(Index.INPUT_FROM),
    read<scope, Index.INPUT_TO>(Index.INPUT_TO),
    read<scope, Index.INPUT_STEP>(Index.INPUT_STEP),
    iter0,
    iter0_execItem
  );
};

export const execDynamicInput = (input: Input) => {
  write(Index.INPUT_FROM, input.from);
  write(Index.INPUT_TO, input.to);
  write(Index.INPUT_STEP, input.step);
  execInputFromToStep();
};

export default createRenderFn(template, walks, undefined, 0, execDynamicInput);

const enum Iter0Index {
  TEXT = 0,
  ITEM = 1,
}

// type iterScope = {
//   [Iter0Index.TEXT]: Text;
//   [Iter0Index.ITEM]: number;
// };

const iter0 = createRenderer(
  " ",
  open(4) + get + next(1) + close,
  undefined,
  0
);

const iter0_execItem = (item: number) => {
  if (write(Iter0Index.ITEM, item)) {
    data(Iter0Index.TEXT, item);
  }
};
