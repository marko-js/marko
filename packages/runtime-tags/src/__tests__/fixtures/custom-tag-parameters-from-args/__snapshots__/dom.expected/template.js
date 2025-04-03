export const $template = `${_customTag_template}<!>`;
export const $walks = /* beginChild, _customTag_walks, endChild */`/${_customTag_walks}&D`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $count2$customtag$content = /* @__PURE__ */_$.value("count2", ($scope, count2) => _$.data($scope["#text/1"], count2));
const $count$customtag$content = /* @__PURE__ */_$.value("count", ($scope, count) => _$.data($scope["#text/0"], count));
const $params2$customtag$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => {
  $count$customtag$content($scope, $params2[0]);
  $count2$customtag$content($scope, $params2[1]);
});
const $customtag_content = _$.registerContent("__tests__/template.marko_1_renderer", "<div>Counts: <!>,<!></div>", /* next(1), over(1), replace, over(2), replace */"Db%c%", 0, $params2$customtag$content);
export function $setup($scope) {
  _customTag($scope["#childScope/0"]);
  _customTag_input_content($scope["#childScope/0"], $customtag_content($scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);