export const $template = "<!><!><div id=ref></div><button id=increment>Increment</button><button id=toggle>Toggle</button>";
export const $walks = /* replace, over(2), get, over(1), get, over(1) */"D%c b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x$if$content_effect = _$.effect("__tests__/template.marko_1_x", ($scope, {
  _: {
    x
  }
}) => _$.lifecycle($scope, "$lifecycle", {
  onMount: function () {
    document.getElementById("ref").textContent = "Mount " + x;
  },
  onUpdate: function () {
    document.getElementById("ref").textContent = "Update " + x;
  },
  onDestroy: function () {
    document.getElementById("ref").textContent = "Destroy";
  }
}));
const $x$if$content = /* @__PURE__ */_$.conditionalClosure("x", "#text/0", 0, $x$if$content_effect);
const $if_content = /* @__PURE__ */_$.createRenderer(0, 0, 0, 0, $x$if$content);
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/1"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/3", $scope => {
  $x$if$content($scope);
  $x_effect($scope);
});
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
const $show_effect = _$.effect("__tests__/template.marko_0_show", ($scope, {
  show
}) => _$.on($scope["#button/2"], "click", function () {
  $show($scope, !show);
}));
const $show = /* @__PURE__ */_$.state("show/4", ($scope, show) => {
  $if($scope, show ? 0 : 1);
  $show_effect($scope);
});
export function $setup($scope) {
  $x($scope, 0);
  $show($scope, true);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);