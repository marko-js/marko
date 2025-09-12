export const $template = "<div><!><!><!><button>Inc</button></div>";
export const $walks = /* next(1), replace, over(1), replace, over(1), replace, over(1), get, out(1) */"D%b%b%b l";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
const $await_content3__value = /* @__PURE__ */_._const("value", ($scope, value) => _._text($scope["#text/0"], value));
const $await_content3__count = /* @__PURE__ */_._closure_get("count", ($scope, count) => _._text($scope["#text/1"], count));
const $await_content3__setup = $await_content3__count;
const $await_content3__$params = /* @__PURE__ */_._const("$params4", ($scope, $params4) => $await_content3__value($scope, $params4[0]));
const $await_content3 = /* @__PURE__ */_._content_branch("Got: <!> <!>", /* over(1), replace, over(2), replace, over(1) */"b%c%b", $await_content3__setup, $await_content3__$params);
const $await_content2__value = /* @__PURE__ */_._const("value", ($scope, value) => _._text($scope["#text/0"], value));
const $await_content2__count = /* @__PURE__ */_._closure_get("count", ($scope, count) => _._text($scope["#text/1"], count));
const $await_content2__setup = $await_content2__count;
const $await_content2__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $await_content2__value($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_._content_branch("Got: <!> <!>", /* over(1), replace, over(2), replace, over(1) */"b%c%b", $await_content2__setup, $await_content2__$params);
const $await_content__value = /* @__PURE__ */_._const("value", ($scope, value) => _._text($scope["#text/0"], value));
const $await_content__count = /* @__PURE__ */_._closure_get("count", ($scope, count) => _._text($scope["#text/1"], count));
const $await_content__setup = $await_content__count;
const $await_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $await_content__value($scope, $params2[0]));
const $await_content = /* @__PURE__ */_._content_branch("Got: <!> <!>", /* over(1), replace, over(2), replace, over(1) */"b%c%b", $await_content__setup, $await_content__$params);
const $count__closure = /* @__PURE__ */_._closure($await_content__count, $await_content2__count, $await_content3__count);
const $count__script = _._script("__tests__/template.marko_0_count", ($scope, {
  count
}) => _._on($scope["#button/3"], "click", function () {
  $count($scope, ++count);
}));
const $count = /* @__PURE__ */_._let("count/4", $scope => {
  $count__closure($scope);
  $count__script($scope);
});
const $await = /* @__PURE__ */_._await("#text/0", $await_content);
const $await2 = /* @__PURE__ */_._await("#text/1", $await_content2);
const $await3 = /* @__PURE__ */_._await("#text/2", $await_content3);
export function $setup($scope) {
  $count($scope, 0);
  $await($scope, Promise.resolve("a"));
  $await2($scope, resolveAfter("b", 2));
  $await3($scope, resolveAfter("c", 1));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);