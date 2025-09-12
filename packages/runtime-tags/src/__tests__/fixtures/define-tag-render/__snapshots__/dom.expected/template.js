export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
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
const $define_content__setup = $scope => {
  $define_content__y($scope, 1);
};
const $define_content__name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $define_content__name($scope, $temp.name));
const $define_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<div>Hello <!> <!></div><button> </button>", /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get, out(1) */"Db%c%l D l", $define_content__setup, $define_content__$params);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $MyTag = /* @__PURE__ */_._const("MyTag", ($scope, MyTag) => $dynamicTag($scope, MyTag, () => ({
  name: "Ryan"
})));
export function $setup($scope) {
  $MyTag($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);