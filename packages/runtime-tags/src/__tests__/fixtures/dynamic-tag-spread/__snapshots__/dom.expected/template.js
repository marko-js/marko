export const $template = `<div>${_wrapper_template}</div><div>${_wrapper_template}</div>`;
export const $walks = /* next(1), <wrapper>, out(1), next(1), <wrapper>, out(1) */`D/${_wrapper_walks}&lD/${_wrapper_walks}&l`;
import { $setup as _wrapper, $input as _wrapper_param_, $template as _wrapper_template, $walks as _wrapper_walks, $inputAs as _wrapper_input_as, $htmlInput as _wrapper_input_$rest } from "./tags/wrapper.marko";
export function $setup($scope) {
  _wrapper($scope["#childScope/0"]);
  _wrapper_param_($scope["#childScope/0"], {
    id: "foo"
  });
  _wrapper($scope["#childScope/1"]);
  const $wrapper_input_spread = {
    id: "foo"
  };
  _wrapper_input_as($scope["#childScope/1"], $wrapper_input_spread.as);
  _wrapper_input_$rest($scope["#childScope/1"], {
    ...{
      id: "foo"
    },
    as: void 0
  });
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);