const $define_content__walks = /* next(1), over(1), replace, over(2), replace, out(1) */"Db%c%l",
  $define_content__template = "<div>Hello <!> <!></div>";
export const $template = `<button> </button>${$define_content__template}<!>`;
export const $walks = /* get, next(1), get, out(1), beginChild, $define_content__walks, endChild, over(1) */` D l/${$define_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $define_content__count = /* @__PURE__ */_._const("count", ($scope, count) => _._text($scope["#text/1"], count));
const $define_content__setup = _._child_setup();
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => {
  $define_content__name($scope, $temp.name);
  $define_content__count($scope, $temp.count);
});
const $define_content = _._content_resume("__tests__/template.marko_1_content", $define_content__template, $define_content__walks, $define_content__setup, $define_content__$params);
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/3", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $define_content__count($scope["#childScope/2"], count);
  $count__script($scope);
});
export function $setup($scope) {
  $define_content__setup($scope["#childScope/2"], $scope);
  $define_content__name($scope["#childScope/2"], "Ryan");
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);