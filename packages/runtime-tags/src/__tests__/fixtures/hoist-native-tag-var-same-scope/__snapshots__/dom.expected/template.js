export const $template = `${_child_template}<div></div>${_child_template}`;
export const $walks = /* <child>, get, over(1), <child> */`/${_child_walks}& b/${_child_walks}&`;
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $el_getter = _._hoist_resume("__tests__/template.marko_0_#div/hoist", "#div/1");
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    value: $el_getter($scope)
  });
  _child($scope["#childScope/2"]);
  _child_input($scope["#childScope/2"], {
    value: $el_getter($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);