export const $template = `${_child_template}<div></div>${_child_template}`;
export const $walks = /* <child>, get, over(1), <child> */`/${_child_walks}& b/${_child_walks}&`;
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $getdiv = _._el("__tests__/template.marko_0/#div", "#div/1");
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    value: $getdiv($scope)
  });
  _child($scope["#childScope/2"]);
  _child_input($scope["#childScope/2"], {
    value: $getdiv($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);