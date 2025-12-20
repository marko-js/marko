export const $template = `${_customTag_template}<!>`;
export const $walks = /* <custom-tag>, over(1) */`/${_customTag_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $input_name as _customTag_input_name, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $customtag_content__name = ($scope, name) => _._text($scope["#text/0"], name);
const $customtag_content__count = ($scope, count) => _._text($scope["#text/1"], count);
const $customtag_content__$params = ($scope, $params2) => $customtag_content__$temp($scope, $params2?.[0]);
const $customtag_content__$temp = ($scope, $temp) => {
  $customtag_content__count($scope, $temp.count);
  $customtag_content__name($scope, $temp.name);
};
const $customtag_content = _._content_resume("__tests__/template.marko_1_content", "<div>Count (<!>): <!></div>", /* next(1), over(1), replace, over(2), replace, out(1) */"Db%c%l", 0, $customtag_content__$params);
export function $setup($scope) {
  _customTag($scope["#childScope/0"]);
  _customTag_input_content($scope["#childScope/0"], $customtag_content($scope));
  _customTag_input_name($scope["#childScope/0"], "hello");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);