export const $template = "<div><button> </button><div><button> </button><div><button> </button></div></div></div><div><button> </button></div>";
export const $walks = /* next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(1), next(1), get, next(1), get, out(4), next(1), get, next(1), get, out(2) */"D D lD D lD D oD D m";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count4__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count4($scope, ++count);
}));
const $count4 = /* @__PURE__ */_._let("count/8", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $count4__script($scope);
});
const $count5__script = _._script("__tests__/template.marko_0_$count", ($scope, {
  $count
}) => _._on($scope["#button/2"], "click", function () {
  $count5($scope, ++$count);
}));
const $count5 = /* @__PURE__ */_._let("$count/9", ($scope, $count) => {
  _._text($scope["#text/3"], $count);
  $count5__script($scope);
});
const $count6__script = _._script("__tests__/template.marko_0_$count2", ($scope, {
  $count2
}) => _._on($scope["#button/4"], "click", function () {
  $count6($scope, ++$count2);
}));
const $count6 = /* @__PURE__ */_._let("$count2/10", ($scope, $count2) => {
  _._text($scope["#text/5"], $count2);
  $count6__script($scope);
});
const $count7__script = _._script("__tests__/template.marko_0_$count3", ($scope, {
  $count3
}) => _._on($scope["#button/6"], "click", function () {
  $count7($scope, ++$count3);
}));
const $count7 = /* @__PURE__ */_._let("$count3/11", ($scope, $count3) => {
  _._text($scope["#text/7"], $count3);
  $count7__script($scope);
});
export function $setup($scope) {
  $count4($scope, 0);
  $count5($scope, 0);
  $count6($scope, 0);
  $count7($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);