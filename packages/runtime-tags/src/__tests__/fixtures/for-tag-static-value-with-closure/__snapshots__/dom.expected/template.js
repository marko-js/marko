export const $template = "<!><!><button> </button>";
export const $walks = /* over(1), replace, over(1), get, next(1), get, out(1) */"b%b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__index = /* @__PURE__ */_._const("index", ($scope, index) => _._text($scope["#text/0"], index));
const $for_content__count = /* @__PURE__ */_._for_closure("count", "#text/0", ($scope, count) => _._text($scope["#text/1"], count));
const $for_content__setup = $for_content__count;
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__index($scope, $params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<!>-<!>", /* replace, over(2), replace, over(1) */"%c%b", $for_content__setup, $for_content__$params);
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/1"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/3", ($scope, count) => {
  _._text($scope["#text/2"], count);
  $for_content__count($scope);
  $count__script($scope);
});
const $for = /* @__PURE__ */_._for_to("#text/0", $for_content);
export function $setup($scope) {
  $count($scope, 0);
  $for($scope, [3, 0, 1]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);