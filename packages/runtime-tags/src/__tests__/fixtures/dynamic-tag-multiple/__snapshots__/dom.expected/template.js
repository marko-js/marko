export const $template = `<div>${_wrapper_template}</div><div>${_wrapper_template}</div><div>${_wrapper_template}</div><div>${_wrapper_template}</div>`;
export const $walks = /* next(1), beginChild, _wrapper_walks, endChild, out(1), next(1), beginChild, _wrapper_walks, endChild, out(1), next(1), beginChild, _wrapper_walks, endChild, out(1), next(1), beginChild, _wrapper_walks, endChild, out(1) */`D/${_wrapper_walks}&lD/${_wrapper_walks}&lD/${_wrapper_walks}&lD/${_wrapper_walks}&l`;
import { $setup as _wrapper, $input as _wrapper_input, $template as _wrapper_template, $walks as _wrapper_walks } from "./tags/wrapper.marko";
export function $setup($scope) {
  _wrapper($scope["#childScope/0"]);
  _wrapper_input($scope["#childScope/0"], {});
  _wrapper($scope["#childScope/1"]);
  _wrapper_input($scope["#childScope/1"], {});
  _wrapper($scope["#childScope/2"]);
  _wrapper_input($scope["#childScope/2"], {});
  _wrapper($scope["#childScope/3"]);
  _wrapper_input($scope["#childScope/3"], {});
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);