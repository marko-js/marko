export const $template = "<button>Toggle</button><pre></pre><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup$if$content_effect = _$.effect("__tests__/template.marko_1", $scope => {
  $scope._["#pre/1"].innerHTML += '\nmounted';
  _$.getAbortSignal($scope, 0).onabort = () => {
    $scope._["#pre/1"].innerHTML += '\ndestroyed';
  };
});
const $setup$if$content = $scope => {
  _$.resetAbortSignal($scope, 0);
  $setup$if$content_effect($scope);
};
const $if_content = /* @__PURE__ */_$.createRenderer("<div>a</div><span>b</span><p>c</p>", 0, $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/2", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/0"], "click", function () {
  $show($scope, !show);
}));
const $show = /* @__PURE__ */_$.state("show/3", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
export function $setup($scope) {
  $show($scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);