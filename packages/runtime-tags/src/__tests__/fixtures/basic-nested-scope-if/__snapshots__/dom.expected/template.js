export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $clickCount$else$content = /* @__PURE__ */_$.conditionalClosure("clickCount", "#text/0", 1, ($scope, clickCount) => _$.data($scope["#text/0"], clickCount));
const $setup$else$content = $clickCount$else$content;
const $else_content = /* @__PURE__ */_$.createRenderer("<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace */"Db%", $setup$else$content);
const $clickCount$if$content_effect = _$.effect("__tests__/template.marko_1_clickCount", ($scope, {
  _: {
    clickCount
  }
}) => _$.on($scope["#button/0"], "click", function () {
  $clickCount($scope._, clickCount + 1), clickCount;
}));
const $clickCount$if$content = /* @__PURE__ */_$.conditionalClosure("clickCount", "#text/0", 0, ($scope, clickCount) => {
  _$.data($scope["#text/1"], clickCount);
  $clickCount$if$content_effect($scope);
});
const $setup$if$content = $clickCount$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content, $else_content);
const $clickCount = /* @__PURE__ */_$.state("clickCount/1", ($scope, clickCount) => {
  $if($scope, clickCount < 3 ? 0 : 1);
  $clickCount$if$content($scope);
  $clickCount$else$content($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);