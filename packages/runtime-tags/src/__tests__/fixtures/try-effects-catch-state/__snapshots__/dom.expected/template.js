export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
_$.enableCatch();
const $err$catch$content = /* @__PURE__ */_$.value("err", ($scope, err) => _$.data($scope["#text/0"], err));
const $params2$catch$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $err$catch$content($scope, $params2[0]));
const $catch_content = _$.registerContent("__tests__/template.marko_2_renderer", " ", /* get */" ", 0, $params2$catch$content);
const $clickCount$try$content_effect = _$.effect("__tests__/template.marko_1_clickCount", ($scope, {
  _: {
    clickCount
  }
}) => {
  _$.on($scope["#button/0"], "click", function () {
    $clickCount($scope._, clickCount + 1), clickCount;
  });
  $scope._["#div/0"].textContent = clickCount;
});
const $clickCount$try$content = /* @__PURE__ */_$.dynamicClosureRead("clickCount", ($scope, clickCount) => {
  _$.data($scope["#text/1"], (() => {
    if (clickCount > 1) throw new Error("ERROR!");
  })());
  $clickCount$try$content_effect($scope);
});
const $try_content = /* @__PURE__ */_$.createRenderer("<button>inc</button> -- <!>", /* get, over(2), replace */" c%", 0, 0, $scope => $clickCount$try$content($scope));
const $try = /* @__PURE__ */_$.createTry("#text/1", $try_content);
const $clickCount_closure = /* @__PURE__ */_$.dynamicClosure($clickCount$try$content);
const $clickCount = /* @__PURE__ */_$.state("clickCount/2", $clickCount_closure);
export function $setup($scope) {
  $clickCount($scope, 0);
  $try($scope, {
    catch: _$.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);