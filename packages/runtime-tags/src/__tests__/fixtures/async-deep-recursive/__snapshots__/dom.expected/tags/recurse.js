export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import { resolveAfter } from "../../../utils/resolve";
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $placeholder_content = _._content_resume("__tests__/tags/recurse.marko_4_content", "LOADING...", /* over(1) */"b");
const $await_content__input_level = /* @__PURE__ */_._closure_get("input_level", $scope => $input_level($scope["#childScope/0"], $scope._._._.input_level - 1), $scope => $scope._._._, "__tests__/tags/recurse.marko_3_input_level");
const $await_content__setup = $scope => {
  $await_content__input_level($scope);
  $setup($scope["#childScope/0"]);
};
const $await_content = /* @__PURE__ */_._await_content("#text/0", `<!>${$template}<!>`, /* over(1), <recurse>, over(1) */`b/${$walks}&b`, $await_content__setup);
const $try_content__await_promise = /* @__PURE__ */_._await_promise("#text/0");
const $try_content__setup = $scope => {
  $await_content($scope);
  $try_content__await_promise($scope, resolveAfter(0));
};
const $if_content__input_level = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => _._attr($scope["#div/0"], "data-level", $scope._.input_level));
const $if_content__try = /* @__PURE__ */_._try("#text/1", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $if_content__setup = $scope => {
  $if_content__input_level._($scope);
  $if_content__try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
};
const $if = /* @__PURE__ */_._if("#text/0", "<div><!></div>", /* get, next(1), replace, out(1) */" D%l", $if_content__setup);
const $input_level__closure = /* @__PURE__ */_._closure($await_content__input_level);
export const $input_level = /* @__PURE__ */_._const("input_level", $scope => {
  $if($scope, $scope.input_level ? 0 : 1);
  $if_content__input_level($scope);
  $input_level__closure($scope);
});
export const $input = ($scope, input) => $input_level($scope, input.level);
export default /* @__PURE__ */_._template("__tests__/tags/recurse.marko", $template, $walks, $setup, $input);