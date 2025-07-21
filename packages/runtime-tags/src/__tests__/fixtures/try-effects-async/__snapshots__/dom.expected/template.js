export const $template = "<button>inc</button><div></div><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $value$await$content = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value > 1 ? (() => {
  throw new Error("ERROR!");
})() : value));
const $params3$await$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $value$await$content($scope, $params3[0]));
const $await_content = /* @__PURE__ */_$.createRenderer("Async: <!>", /* over(1), replace */"b%", 0, $params3$await$content);
const $err$catch$content = /* @__PURE__ */_$.value("err", ($scope, err) => _$.data($scope["#text/0"], err));
const $params2$catch$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $err$catch$content($scope, $params2[0]));
const $catch_content = _$.registerContent("__tests__/template.marko_3_renderer", " ", /* get */" ", 0, $params2$catch$content);
const $placeholder_content = _$.registerContent("__tests__/template.marko_2_renderer", "LOADING...");
const $await$try$content = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $clickCount$try$content_effect = _$.effect("__tests__/template.marko_1_clickCount", ($scope, {
  _: {
    clickCount
  }
}) => ($scope._["#div/1"].textContent = clickCount));
const $clickCount$try$content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", ($scope, clickCount) => {
  $await$try$content($scope, resolveAfter(clickCount, 1));
  $clickCount$try$content_effect($scope);
});
const $setup$try$content = $clickCount$try$content;
const $try_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", $setup$try$content);
const $clickCount_closure = /* @__PURE__ */_$.dynamicClosure($clickCount$try$content);
const $clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _$.on($scope["#button/0"], "click", function () {
  $clickCount($scope, ++clickCount)
}));
const $clickCount = /* @__PURE__ */_$.state("clickCount/3", $scope => {
  $clickCount_closure($scope);
  $clickCount_effect($scope);
});
const $try = /* @__PURE__ */_$.createTry("#text/2", $try_content);
export function $setup($scope) {
  $clickCount($scope, 0);
  $try($scope, {
    catch: _$.attrTag({
      content: $catch_content($scope)
    }),
    placeholder: _$.attrTag({
      content: $placeholder_content($scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);