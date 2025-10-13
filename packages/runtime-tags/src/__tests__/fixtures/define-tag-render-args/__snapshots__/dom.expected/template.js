const $MyTag_content__walks = /* next(1), replace, over(2), replace, over(2), replace, out(1) */"D%c%c%l",
  $MyTag_content__template = "<div><!>|<!>|<!></div>";
export const $template = `<!>${$MyTag_content__template}<button> </button>`;
export const $walks = /* over(1), beginChild, $MyTag_content__walks, endChild, get, next(1), get, out(1) */`b/${$MyTag_content__walks}& D l`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyTag_content__a = /* @__PURE__ */_._const("a", ($scope, a) => _._text($scope["#text/0"], a));
const $MyTag_content__b = /* @__PURE__ */_._const("b", ($scope, b) => _._text($scope["#text/1"], b));
const $MyTag_content__c = /* @__PURE__ */_._const("c", ($scope, c) => _._text($scope["#text/2"], c));
const $MyTag_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => {
  $MyTag_content__a($scope, $params2[0]);
  $MyTag_content__b($scope, $params2[1]);
  $MyTag_content__c($scope, $params2[2]);
});
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/3", ($scope, x) => {
  $MyTag_content__c($scope["#childScope/0"], x);
  _._text($scope["#text/2"], x);
  $x__script($scope);
});
export function $setup($scope) {
  $MyTag_content__a($scope["#childScope/0"], 1);
  $MyTag_content__b($scope["#childScope/0"], "Hello");
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);