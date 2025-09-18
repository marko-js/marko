export const $template = "<button> </button><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(2) */" D l%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $define_content__count = /* @__PURE__ */_._const("count", ($scope, count) => _._text($scope["#text/1"], count));
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__$temp($scope, $params2?.[0]));
const $define_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => {
  $define_content__name($scope, $temp.name);
  $define_content__count($scope, $temp.count);
});
const $define_content = _._content_resume("__tests__/template.marko_1_content", "<div>Hello <!> <!></div>", /* next(1), over(1), replace, over(2), replace, out(1) */"Db%c%l", 0, $define_content__$params);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2");
const $count__OR__MyTag = /* @__PURE__ */_._or(5, $scope => {
  let {
    count,
    MyTag
  } = $scope;
  $dynamicTag($scope, MyTag, () => ({
    name: "Ryan",
    count: count
  }));
});
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/3", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $count__OR__MyTag($scope);
  $count__script($scope);
});
const $MyTag = /* @__PURE__ */_._const("MyTag", $count__OR__MyTag);
export function $setup($scope) {
  $count($scope, 0);
  $MyTag($scope, {
    content: $define_content($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);