export const $template = /*@__PURE__*/((_w0, _w1) => `${_w0}${_w1}`)(_thing_template, _child_template);
export const $walks =
/*@__PURE__*/
/* <thing>, <child/var> */
((_w0, _w1) => `/${_w0}&0${_w1}&`)(_thing_walks, _child_walks);
import { $setup as _thing, $input_value as _thing_input_value, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $setHtml_getter = _._hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml");
export function $setup($scope) {
  _thing($scope["#childScope/0"]);
  _thing_input_value($scope["#childScope/0"], $setHtml_getter($scope));
  _._var($scope, "#childScope/1", $setHtml);
  _child($scope["#childScope/1"]);
}
const $setHtml = _._var_resume("__tests__/template.marko_0_setHtml/var", /* @__PURE__ */_._const("setHtml", $scope => _._assert_hoist($scope.setHtml)));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);