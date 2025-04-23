export const $template = `${_customTag_template}<!>`;
export const $walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $input_name as _customTag_input_name, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $name$customtag$content = /* @__PURE__ */_$.value("name", ($scope, name) => _$.data($scope["#text/0"], name));
const $count$customtag$content = /* @__PURE__ */_$.value("count", ($scope, count) => _$.data($scope["#text/1"], count));
const $params2$customtag$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $temp$customtag$content($scope, $params2?.[0]));
const $temp$customtag$content = /* @__PURE__ */_$.value("$temp", ($scope, $temp) => {
  $count$customtag$content($scope, $temp.count);
  $name$customtag$content($scope, $temp.name);
});
const $customtag_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div>Count (<!>): <!></div>", /* next(1), over(1), replace, over(2), replace */"Db%c%", 0, $params2$customtag$content);
export function $setup($scope) {
  _customTag($scope["#childScope/0"]);
  _customTag_input_content($scope["#childScope/0"], $customtag_content($scope));
  _customTag_input_name($scope["#childScope/0"], "hello");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);