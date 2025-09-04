export const $template = "<button> </button>used to be <span> </span> which should be the same as <span> </span>";
export const $walks = /* get, next(1), get, out(1), over(1), next(1), get, out(1), over(1), next(1), get, out(1) */" D lbD lbD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $clickCount__script = _._script("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _._on($scope["#button/0"], "click", function () {
  const last = $lastCount($scope, ($clickCount($scope, ++clickCount), clickCount - 1));
  $lastCount2($scope, last);
}));
const $clickCount = /* @__PURE__ */_._let("clickCount/4", ($scope, clickCount) => {
  _._text($scope["#text/1"], clickCount);
  $clickCount__script($scope);
});
const $lastCount = /* @__PURE__ */_._let("lastCount/5", ($scope, lastCount) => _._text($scope["#text/2"], lastCount));
const $lastCount2 = /* @__PURE__ */_._let("lastCount2/6", ($scope, lastCount2) => _._text($scope["#text/3"], lastCount2));
export function $setup($scope) {
  $clickCount($scope, 0);
  $lastCount($scope, 0);
  $lastCount2($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);