export const $template = "<button>Toggle</button><pre></pre><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup__script = _._script("__tests__/template.marko_1", $scope => {
  $scope._["#pre/1"].innerHTML += '\nmounted';
  _.$signal($scope, 0).onabort = () => {
    $scope._["#pre/1"].innerHTML += '\ndestroyed';
  };
});
const $if_content__setup = $scope => {
  _.$signalReset($scope, 0);
  $if_content__setup__script($scope);
};
const $if_content = /* @__PURE__ */_._content_branch("<div>a</div><span>b</span><p>c</p>", /* over(3) */"d", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/2", $if_content);
const $show__script = _._script("__tests__/template.marko_0_show", ($scope, {
  show
}) => _._on($scope["#button/0"], "click", function () {
  $show($scope, show = !show);
}));
const $show = /* @__PURE__ */_._let("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show__script($scope);
});
export function $setup($scope) {
  $show($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);