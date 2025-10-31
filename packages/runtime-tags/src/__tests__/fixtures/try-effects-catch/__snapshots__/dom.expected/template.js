export const $template = "<div></div><!><div></div>";
export const $walks = /* get, over(1), replace, over(1), get, over(1) */" b%b b";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $catch_content__err_message = /* @__PURE__ */_._const("err_message", $scope => _._text($scope["#text/0"], $scope.err_message));
const $catch_content__$params = /* @__PURE__ */_._const("$params2", $scope => $catch_content__err($scope, $scope.$params2[0]));
const $catch_content__err = /* @__PURE__ */_._const("err", $scope => $catch_content__err_message($scope, $scope.err?.message));
const $catch_content = _._content_resume("__tests__/template.marko_2_content", " ", /* get, over(1) */" b", 0, $catch_content__$params);
const $try_content__setup__script = _._script("__tests__/template.marko_1", $scope => (_._el_read($scope._["#div/0"]).textContent = "This shouldn't happen"));
const $try_content__setup = $scope => {
  _._text($scope["#text/0"], (() => {
    throw new Error("ERROR!");
  })());
  $try_content__setup__script($scope);
};
const $try_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", $try_content__setup);
const $try = /* @__PURE__ */_._try("#text/1", $try_content);
const $setup__script = _._script("__tests__/template.marko_0", $scope => (_._el_read($scope["#div/2"]).textContent = "This is good"));
export function $setup($scope) {
  $try($scope, {
    catch: _.attrTag({
      content: $catch_content($scope)
    })
  });
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);