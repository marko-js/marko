import { data, write, createRenderFn, Scope } from "../../../dom/index";
import { after, over } from "../../utils/walks";

const enum Index {
  TEXT = 0,
  INPUT_VALUE = 1,
}

type ComponentScope = Scope<{
  [Index.TEXT]: Text;
  [Index.INPUT_VALUE]: string;
}>;

// Static ${input.value}
export const template = "Static ";
export const walks = after + over(1);

export const execInputValue = (scope: ComponentScope) => {
  data(scope, Index.TEXT, scope[Index.INPUT_VALUE]);
};

export const execDynamicInput = (
  scope: ComponentScope,
  input: { value: string }
) => {
  if (write(scope, Index.INPUT_VALUE, input.value)) {
    execInputValue(scope);
  }
};

export default createRenderFn(template, walks, undefined, execDynamicInput);
