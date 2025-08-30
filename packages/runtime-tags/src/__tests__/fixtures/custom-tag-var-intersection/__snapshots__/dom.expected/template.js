export const $template = `${_child_template}<div> </div>`;
export const $walks = /* beginChildWithVar, _child_walks, endChild, next(1), get, out(1) */`0${_child_walks}&D l`;
import { $setup as _child, $input_extra as _child_input_extra, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $message = /* @__PURE__ */_$.value("message", ($scope, message) => _$.data($scope["#text/2"], message));
const $expr_name_data = /* @__PURE__ */_$.intersection(5, $scope => {
  let {
    name,
    data
  } = $scope;
  $message($scope, `${name} ${data}`);
}, 1, "#scopeOffset/1");
const $name = /* @__PURE__ */_$.state("name/3", $expr_name_data);
export function $setup($scope) {
  _$.setTagVar($scope, "#childScope/0", $data);
  _child($scope["#childScope/0"]);
  _child_input_extra($scope["#childScope/0"], 1);
  $name($scope, "Marko");
}
const $data = _$.registerBoundSignal("__tests__/template.marko_0_data/var", /* @__PURE__ */_$.value("data", $expr_name_data));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);