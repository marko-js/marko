export const $template = /*@__PURE__*/((_w0, _w1) => `${_w0}<div></div>${_w1}`)(_child_template, _child_template);
export const $walks =
/*@__PURE__*/
/* <child>, get, over(1), <child> */
((_w0, _w1) => `/${_w0}& b/${_w1}&`)(_child_walks, _child_walks);
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