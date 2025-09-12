export const $template = "<button>inc</button><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import { resolveAfter } from "../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $await_content__value = /* @__PURE__ */_._const("value", ($scope, value) => _._text($scope["#text/0"], value));
const $await_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $await_content__value($scope, $params2[0]));
const $await_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $await_content__$params);
const $placeholder_content = _._content_resume("__tests__/template.marko_2_content", "LOADING...", /* over(1) */"b");
const $try_content__await = /* @__PURE__ */_._await("#text/0", $await_content);
const $try_content__clickCount = /* @__PURE__ */_._closure_get("clickCount", ($scope, clickCount) => $try_content__await($scope, resolveAfter(clickCount, 1)));
const $try_content__setup = $try_content__clickCount;
const $try_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $clickCount__closure = /* @__PURE__ */_._closure($try_content__clickCount);
const $clickCount__script = _._script("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _._on($scope["#button/0"], "click", function () {
  $clickCount($scope, ++clickCount);
}));
const $clickCount = /* @__PURE__ */_._let("clickCount/2", $scope => {
  $clickCount__closure($scope);
  $clickCount__script($scope);
});
const $try = /* @__PURE__ */_._try("#text/1", $try_content);
export function $setup($scope) {
  $clickCount($scope, 0);
  $try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);