import {
  data,
  createRenderFn,
  Scope,
  source,
  destructureSources,
  setSource,
} from "../../../dom/index";
import { after, over } from "../../utils/walks";

type Input = { value: string };

const enum INDEX {
  text = 0,
  value = 1,
}

type ComponentScope = Scope<{
  [INDEX.text]: Text;
  [INDEX.value]: string;
}>;

// Static ${input.value}
export const template = "Static ";
export const walks = after + over(1);

export const value_subscribers = [];
export const value_action = (
  scope: ComponentScope,
  value: ComponentScope[INDEX.value]
) => {
  data(scope[INDEX.text], value);
};

const _value = source(INDEX.value, value_subscribers, value_action);

export const attrs = destructureSources(
  [_value],
  (scope: ComponentScope, { value }: Input) => {
    setSource(scope, _value, value);
  }
);

export default createRenderFn(template, walks, undefined, attrs);
