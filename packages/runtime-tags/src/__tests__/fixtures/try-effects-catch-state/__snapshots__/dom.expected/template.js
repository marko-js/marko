export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $catch_content__err = /* @__PURE__ */_._const("err", $scope => _._text($scope["#text/0"], $scope.err));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", $scope => $catch_content__err($scope, $scope.$params2[0]));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", 0, $catch_content__$params);
const $try_content__clickCount__script = _._script("__tests__/template.marko_1_clickCount", $scope => {
  _._on($scope["#button/0"], "click", function () {
    $clickCount($scope._, $scope._.clickCount + 1);
  });
  _._el_read($scope._["#div/0"]).textContent = $scope._.clickCount;
});
const $try_content__clickCount = /* @__PURE__ */_._closure_get("clickCount", $scope => {
  _._text($scope["#text/1"], (() => {
    if ($scope._.clickCount > 1) throw new Error("ERROR!");
  })());
  $try_content__clickCount__script($scope);
});
const $try_content__setup = $try_content__clickCount;
const $try_content = /* @__PURE__ */_._content_branch("<button>inc</button> -- <!>", /* get, over(2), replace, over(1) */" c%b", $try_content__setup);
const $clickCount__closure = /* @__PURE__ */_._closure($try_content__clickCount);
const $clickCount = /* @__PURE__ */_._let("clickCount/2", $clickCount__closure);
const $try = /* @__PURE__ */_._try("#text/1", $try_content);
export function $setup($scope) {
  $clickCount($scope, 0);
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);