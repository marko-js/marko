const $define_content__walks = /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get, out(1) */"Db%c%l D l",
  $define_content__template = "<div>Hello <!> <!></div><button> </button>";
export const $template = `<!>${$define_content__template}<!>`;
export const $walks = /* over(1), beginChild, $define_content__walks, endChild, over(1) */`b/${$define_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__y__script = _._script("__tests__/template.marko_1_y", ($scope, {
  y
}) => _._on($scope["#button/2"], "click", function () {
  $define_content__y($scope, ++y);
}));
const $define_content__y = /* @__PURE__ */_._let("y/7", ($scope, y) => {
  _._text($scope["#text/1"], y);
  _._text($scope["#text/3"], y);
  $define_content__y__script($scope);
});
const $define_content__setup = _._child_setup($scope => $define_content__y($scope, 1));
const $define_content__name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $define_content__name($scope, $temp.name));
const $define_content = _._content_resume("__tests__/template.marko_1_content", $define_content__template, $define_content__walks, $define_content__setup, $define_content__$params);
export function $setup($scope) {
  $define_content__setup($scope["#childScope/0"], $scope);
  $define_content__name($scope["#childScope/0"], "Ryan");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);