export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
_$.enableCatch();
_$.enableCatch();
_$.enableCatch();
const $value$await$content4 = /* @__PURE__ */_$.value("value", ($scope, value) => _$.classAttr($scope["#div/0"], value));
const $params5$await$content = /* @__PURE__ */_$.value("$params5", ($scope, $params5) => $value$await$content4($scope, $params5[0]));
const $await_content4 = /* @__PURE__ */_$.createRenderer("<div level=4></div>", /* get, over(1) */" b", 0, $params5$await$content);
const $placeholder_content4 = _$.registerContent("__tests__/template.marko_11_renderer", "LOADING B2", /* over(1) */"b");
const $placeholder_content3 = _$.registerContent("__tests__/template.marko_10_renderer", "LOADING B1", /* over(1) */"b");
const $await$try$content = /* @__PURE__ */_$.awaitTag("#text/0", $await_content4);
const $promiseB$try$content = /* @__PURE__ */_$.dynamicClosureRead("promiseB", $await$try$content, $scope => $scope._._._);
const $setup$try$content = $promiseB$try$content;
const $try_content4 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* over(1), replace, over(2) */"b%c", $setup$try$content);
const $value$await$content3 = /* @__PURE__ */_$.value("value", ($scope, value) => _$.classAttr($scope["#div/0"], value));
const $try$await$content = /* @__PURE__ */_$.createTry("#text/1", $try_content4);
const $setup$await$content2 = $scope => {
  $try$await$content($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content4($scope)
    })
  });
};
const $params4$await$content = /* @__PURE__ */_$.value("$params4", ($scope, $params4) => $value$await$content3($scope, $params4[0]));
const $await_content3 = /* @__PURE__ */_$.createRenderer("<div level=3><!></div>", /* get, next(1), replace, out(1) */" D%l", $setup$await$content2, $params4$await$content);
const $await$try$content2 = /* @__PURE__ */_$.awaitTag("#text/0", $await_content3);
const $promiseB$try$content2 = /* @__PURE__ */_$.dynamicClosureRead("promiseB", $await$try$content2);
const $setup$try$content2 = $promiseB$try$content2;
const $try_content3 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* over(1), replace, over(2) */"b%c", $setup$try$content2);
const $value$await$content2 = /* @__PURE__ */_$.value("value", ($scope, value) => _$.classAttr($scope["#div/0"], value));
const $promiseB$await$content = /* @__PURE__ */_$.value("promiseB");
const $try$await$content2 = /* @__PURE__ */_$.createTry("#text/1", $try_content3);
const $setup$await$content = $scope => {
  $promiseB$await$content($scope, resolveAfter("b", 2));
  $try$await$content2($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content3($scope)
    })
  });
};
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $value$await$content2($scope, $params3[0]));
const $await_content2 = /* @__PURE__ */_$.createRenderer("<div level=2><!></div>", /* get, next(1), replace, out(1) */" D%l", $setup$await$content, $params3$await$content);
const $placeholder_content2 = _$.registerContent("__tests__/template.marko_5_renderer", "LOADING A2", /* over(1) */"b");
const $placeholder_content = _$.registerContent("__tests__/template.marko_4_renderer", "LOADING A1", /* over(1) */"b");
const $await$try$content3 = /* @__PURE__ */_$.awaitTag("#text/0", $await_content2);
const $promiseA$try$content = /* @__PURE__ */_$.dynamicClosureRead("promiseA", $await$try$content3, $scope => $scope._._._);
const $setup$try$content3 = $promiseA$try$content;
const $try_content2 = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* over(1), replace, over(2) */"b%c", $setup$try$content3);
const $value$await$content = /* @__PURE__ */_$.value("value", ($scope, value) => _$.classAttr($scope["#div/0"], value));
const $try$await$content3 = /* @__PURE__ */_$.createTry("#text/1", $try_content2);
const $setup$await$content3 = $scope => {
  $try$await$content3($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content2($scope)
    })
  });
};
const $params2$await$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $value$await$content($scope, $params2[0]));
const $await_content = /* @__PURE__ */_$.createRenderer("<div level=1><!></div>", /* get, next(1), replace, out(1) */" D%l", $setup$await$content3, $params2$await$content);
const $await$try$content4 = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $promiseA$try$content2 = /* @__PURE__ */_$.dynamicClosureRead("promiseA", $await$try$content4);
const $setup$try$content4 = $promiseA$try$content2;
const $try_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* over(1), replace, over(2) */"b%c", $setup$try$content4);
const $promiseA = /* @__PURE__ */_$.value("promiseA");
const $try = /* @__PURE__ */_$.createTry("#text/0", $try_content);
export function $setup($scope) {
  $promiseA($scope, resolveAfter("a", 1));
  $try($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content($scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);