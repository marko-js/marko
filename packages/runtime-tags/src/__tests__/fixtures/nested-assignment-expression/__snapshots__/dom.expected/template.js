export const $template = "<button> </button>used to be <span> </span> which should be the same as <span> </span>";
export const $walks = /* get, next(1), get, out(1), over(1), next(1), get, out(1), over(1), next(1), get, out(1) */" D lbD lbD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $lastCount2 = /* @__PURE__ */_$.state("lastCount2/6", ($scope, lastCount2) => _$.data($scope["#text/3"], lastCount2));
const $lastCount = /* @__PURE__ */_$.state("lastCount/5", ($scope, lastCount) => _$.data($scope["#text/2"], lastCount));
const $clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _$.on($scope["#button/0"], "click", function () {
  const last = $lastCount($scope, ($clickCount($scope, clickCount + 1), clickCount));
  $lastCount2($scope, last);
}));
const $clickCount = /* @__PURE__ */_$.state("clickCount/4", ($scope, clickCount) => {
  _$.data($scope["#text/1"], clickCount);
  $clickCount_effect($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
  $lastCount($scope, 0);
  $lastCount2($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);