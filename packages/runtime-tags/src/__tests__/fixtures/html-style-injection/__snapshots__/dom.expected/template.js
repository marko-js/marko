export const $template = "<style></style>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $injection = /* @__PURE__ */_._let("injection/1", $scope => _._text_content($scope["#style/0"], `.evil { content: '${_._to_text($scope.injection)}'; }`));
export function $setup($scope) {
  _._attr_nonce($scope, "#style/0");
  $injection($scope, "</STYLE>");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);