export const $template = `<!>${_child_template}`;
export const $walks = /* over(1), <child/var> */`b0${_child_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content__setHtml__script = _._script("__tests__/template.marko_1_setHtml", $scope => $scope._.setHtml("Hello world"));
const $child_content__setHtml = /* @__PURE__ */_._closure_get("setHtml", $child_content__setHtml__script);
const $child_content__setup = $child_content__setHtml;
const $child_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", 0, 0, $child_content__setup);
const $setHtml = _._var_resume("__tests__/template.marko_0_setHtml/var", /* @__PURE__ */_._const("setHtml"));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $setHtml);
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);