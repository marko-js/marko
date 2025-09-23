const $define_content__walks = /* next(1), get, out(1) */"D l",
  $define_content__template = "<div> </div>";
export const $template = `<!>${$define_content__template}<button> </button>`;
export const $walks = /* over(1), beginChild, $define_content__walks, endChild, get, next(1), get, out(1) */`b/${$define_content__walks}& D l`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__number = /* @__PURE__ */_._const("number", ($scope, number) => _._text($scope["#text/0"], number));
const $define_content__setup = _._child_setup();
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $define_content__number($scope, $temp.number));
const $define_content = _._content_resume("__tests__/template.marko_1_content", $define_content__template, $define_content__walks, $define_content__setup, $define_content__$params);
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/3", ($scope, x) => {
  $define_content__number($scope["#childScope/0"], x);
  _._text($scope["#text/2"], x);
  $x__script($scope);
});
export function $setup($scope) {
  $define_content__setup($scope["#childScope/0"], $scope);
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);