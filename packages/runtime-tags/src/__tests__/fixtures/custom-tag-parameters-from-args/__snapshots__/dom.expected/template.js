export const $template = `${_customTag_template}<!>`;
export const $walks = /* beginChild, _customTag_walks, endChild, over(1) */`/${_customTag_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $customtag_content__count = /* @__PURE__ */_._const("count", ($scope, count) => _._text($scope["#text/0"], count));
const $customtag_content__count2 = /* @__PURE__ */_._const("count2", ($scope, count2) => _._text($scope["#text/1"], count2));
const $customtag_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => {
  $customtag_content__count($scope, $params2[0]);
  $customtag_content__count2($scope, $params2[1]);
});
const $customtag_content = _._content_resume("__tests__/template.marko_1_content", "<div>Counts: <!>,<!></div>", /* next(1), over(1), replace, over(2), replace, out(1) */"Db%c%l", 0, $customtag_content__$params);
export function $setup($scope) {
  _customTag($scope["#childScope/0"]);
  _customTag_input_content($scope["#childScope/0"], $customtag_content($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);