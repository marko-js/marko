export const $template = `<div>${_wrapper_template}</div><div>${_wrapper_template}</div><div>${_wrapper_template}</div><div>${_wrapper_template}</div>`;
export const $walks = /* next(1), <wrapper>, out(1), next(1), <wrapper>, out(1), next(1), <wrapper>, out(1), next(1), <wrapper>, out(1) */`D/${_wrapper_walks}&lD/${_wrapper_walks}&lD/${_wrapper_walks}&lD/${_wrapper_walks}&l`;
import { $setup as _wrapper, $inputAs as _wrapper_input_as, $htmlInput as _wrapper_input_$rest, $template as _wrapper_template, $walks as _wrapper_walks } from "./tags/wrapper.marko";
export function $setup($scope) {
  _wrapper($scope["#childScope/0"]);
  _wrapper_input_as($scope["#childScope/0"]);
  _wrapper_input_$rest($scope["#childScope/0"], {});
  _wrapper($scope["#childScope/1"]);
  _wrapper_input_as($scope["#childScope/1"]);
  _wrapper_input_$rest($scope["#childScope/1"], {});
  _wrapper($scope["#childScope/2"]);
  _wrapper_input_as($scope["#childScope/2"]);
  _wrapper_input_$rest($scope["#childScope/2"], {});
  _wrapper($scope["#childScope/3"]);
  _wrapper_input_as($scope["#childScope/3"]);
  _wrapper_input_$rest($scope["#childScope/3"], {});
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);