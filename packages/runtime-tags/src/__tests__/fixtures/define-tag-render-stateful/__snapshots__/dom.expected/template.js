const $MyTag_content__walks = /* next(1), over(1), replace, over(2), replace, out(1) */"Db%c%l",
  $MyTag_content__template = "<div>Hello <!> <!></div>";
export const $template = `<button> </button>${$MyTag_content__template}<!>`;
export const $walks = /* get, next(1), get, out(1), beginChild, $MyTag_content__walks, endChild, over(1) */` D l/${$MyTag_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyTag_content__name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $MyTag_content__count = /* @__PURE__ */_._const("count", ($scope, count) => _._text($scope["#text/1"], count));
const $MyTag_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $MyTag_content__$temp($scope, $params2?.[0]));
const $MyTag_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => {
  $MyTag_content__name($scope, $temp.name);
  $MyTag_content__count($scope, $temp.count);
});
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/0"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/3", ($scope, count) => {
  _._text($scope["#text/1"], count);
  $MyTag_content__count($scope["#childScope/2"], count);
  $count__script($scope);
});
export function $setup($scope) {
  $MyTag_content__name($scope["#childScope/2"], "Ryan");
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);