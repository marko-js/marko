export const $template = "<style>\n  A {}\n</style><style nonce=override>\n  B {}\n</style><style>\n  C {}\n</style>";
export const $walks = /* over(2), get, over(1) */"c b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $spreadAttrs__script = _._script("__tests__/template.marko_0_spreadAttrs", $scope => _._attrs_script($scope, "#style/0"));
const $spreadAttrs = /* @__PURE__ */_._const("spreadAttrs", $scope => {
  _._attrs($scope, "#style/0", $scope.spreadAttrs);
  $spreadAttrs__script($scope);
});
export function $setup($scope) {
  $spreadAttrs($scope, {
    nonce: "override-spread"
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);