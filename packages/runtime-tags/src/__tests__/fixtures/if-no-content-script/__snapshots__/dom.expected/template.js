export const $template = "<div></div><button> </button><!><!>";
export const $walks = /* get, over(1), get, next(1), get, out(1), replace, over(2) */" b D l%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup__script = _._script("__tests__/template.marko_1", $scope => (_._el_read($scope._["#div/0"]).textContent = "Hit"));
const $if_content__setup = $if_content__setup__script;
const $if_content = /* @__PURE__ */_._content_branch(0, 0, $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/3", $if_content);
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/1"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/4", ($scope, count) => {
  _._text($scope["#text/2"], count);
  $if($scope, !count ? 0 : 1);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);