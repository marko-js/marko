export const $template = `${_customTag_template}<!>`;
export const $walks = /* beginChild, _customTag_walks, endChild, over(1) */`/${_customTag_walks}&b`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $count$customtag$content = /* @__PURE__ */_$.value("count", ($scope, count) => _$.data($scope["#text/0"], count));
const $params2$customtag$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $count$customtag$content($scope, $params2[0]));
const $customtag_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div>Count: <!></div>", /* next(1), over(1), replace, out(1) */"Db%l", 0, $params2$customtag$content);
export function $setup($scope) {
  _customTag($scope["#childScope/0"]);
  _customTag_input_content($scope["#childScope/0"], $customtag_content($scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);