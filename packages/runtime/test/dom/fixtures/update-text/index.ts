import {
  data,
  walk,
  read,
  write,
  enableExtendedWalk,
  register,
  createRenderFn,
  Scope
} from "../../../../src/dom/index";
import { after, over } from "../../utils/walks";

export const inputs = [
  {
    value: "Dynamic 1"
  },
  {
    value: "Dynamic 2"
  },
  {
    value: "Dynamic 3"
  }
];

const enum Index {
  TEXT = 0,
  INPUT_VALUE = 1
}

type scope = {
  [Index.TEXT]: Text;
  [Index.INPUT_VALUE]: typeof inputs[number]["value"];
};

// Static ${input.value}
export const template = "Static ";
export const walks = after + over(1);
export const hydrate = register("", () => {
  write(Index.TEXT, walk());
});

export const execInputValue = () => {
  data(read<scope, Index.TEXT>(Index.TEXT), read(Index.INPUT_VALUE));
};

export const execDynamicInput = (input: typeof inputs[number]) => {
  write(Index.INPUT_VALUE, input.value);
  execInputValue();
};

export default createRenderFn(template, walks, hydrate, 0, execDynamicInput);

enableExtendedWalk();
