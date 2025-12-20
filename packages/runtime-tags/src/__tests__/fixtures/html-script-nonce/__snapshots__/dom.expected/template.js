export const $template = "<script type=magic>\n  A\n</script><script type=magic nonce=override>\n  B\n</script><script>\n  C\n</script><!><!>";
export const $walks = /* get, over(2), get, over(1), replace, over(2) */" c b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup = $scope => _._attr_nonce($scope, "#script/0");
const $spreadAttrs__script = _._script("__tests__/template.marko_0_spreadAttrs", $scope => _._attrs_script($scope, "#script/1"));
const $spreadAttrs = /* @__PURE__ */_._const("spreadAttrs", $scope => {
  _._attrs($scope, "#script/1", {
    nonce: $scope.$global.cspNonce,
    type: "magic",
    ...$scope.spreadAttrs
  });
  $spreadAttrs__script($scope);
});
const $if = /* @__PURE__ */_._if("#text/2", "<script type=magic>\n    D\n  </script>", /* get, over(1) */" b", $if_content__setup);
const $mounted = /* @__PURE__ */_._let("mounted/4", $scope => $if($scope, $scope.mounted ? 0 : 1));
const $setup__script = _._script("__tests__/template.marko_0", $scope => $mounted($scope, true));
export function $setup($scope) {
  _._attr_nonce($scope, "#script/0");
  $spreadAttrs($scope, {
    nonce: "override-spread"
  });
  $mounted($scope, false);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);