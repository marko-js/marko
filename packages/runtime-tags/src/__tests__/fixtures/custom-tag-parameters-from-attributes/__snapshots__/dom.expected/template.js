export const $template = `${_customTag_template}<!>`;
export const $walks = /* beginChild, _customTag_walks, endChild, over(1) */`/${_customTag_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $input_name as _customTag_input_name, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $customtag_content__name = /* @__PURE__ */_._const("name", $scope => _._text($scope["#text/0"], $scope.name));
const $customtag_content__count = /* @__PURE__ */_._const("count", $scope => _._text($scope["#text/1"], $scope.count));
const $customtag_content__$params = /* @__PURE__ */_._const("$params2", $scope => $customtag_content__$temp($scope, $scope.$params2?.[0]));
const $customtag_content__$temp = /* @__PURE__ */_._const("$temp", $scope => {
  $customtag_content__count($scope, $scope.$temp.count);
  $customtag_content__name($scope, $scope.$temp.name);
});
const $customtag_content = _._content_resume("__tests__/template.marko_1_content", "<div>Count (<!>): <!></div>", /* next(1), over(1), replace, over(2), replace, out(1) */"Db%c%l", 0, $customtag_content__$params);
export function $setup($scope) {
  _customTag($scope["#childScope/0"]);
  _customTag_input_content($scope["#childScope/0"], $customtag_content($scope));
  _customTag_input_name($scope["#childScope/0"], "hello");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);