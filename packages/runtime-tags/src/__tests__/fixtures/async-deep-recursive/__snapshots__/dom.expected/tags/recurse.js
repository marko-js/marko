export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
_._enable_catch();
const $placeholder_content = _._content_resume("__tests__/tags/recurse.marko_4_content", "LOADING...", /* over(1) */"b");
const $await_content__setup = $scope => {
  $setup($scope["#childScope/0"]);
  $await_content__input_level($scope);
};
const $await_content__input_level = /* @__PURE__ */_._closure_get("input_level", ($scope, input_level) => $input_level($scope["#childScope/0"], input_level - 1), $scope => $scope._._._);
const $await_content = /* @__PURE__ */_._content_branch(`<!>${$template}<!>`, /* over(1), beginChild, $walks, endChild, over(1) */`b/${$walks}&b`, $await_content__setup);
const $try_content__await = /* @__PURE__ */_._await("#text/0", $await_content);
const $try_content__setup = $scope => {
  $try_content__await($scope, new Promise(setImmediate));
};
const $try_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $try_content__setup);
const $if_content__input_level = /* @__PURE__ */_._if_closure("input_level", "#text/0", 0, ($scope, input_level) => _._attr($scope["#div/0"], "data-level", input_level));
const $if_content__try = /* @__PURE__ */_._try("#text/1", $try_content);
const $if_content__setup = $scope => {
  $if_content__input_level._($scope);
  $if_content__try($scope, {
    placeholder: _.attrTag({
      content: $placeholder_content($scope)
    })
  });
};
const $if_content = /* @__PURE__ */_._content_branch("<div><!></div>", /* get, next(1), replace, out(1) */" D%l", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
const $input_level__closure = /* @__PURE__ */_._closure($await_content__input_level);
export const $input_level = /* @__PURE__ */_._const("input_level", ($scope, input_level) => {
  $if($scope, input_level ? 0 : 1);
  $if_content__input_level($scope);
  $input_level__closure($scope);
});
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_level($scope, input.level));
export default /* @__PURE__ */_._template("__tests__/tags/recurse.marko", $template, $walks, $setup, $input);