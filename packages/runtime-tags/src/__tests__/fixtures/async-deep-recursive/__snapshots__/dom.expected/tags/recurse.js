export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $template as _recurse_template, $walks as _recurse_walks } from "./recurse.marko";
_$.enableCatch();
const $placeholder_content = _$.registerContent("__tests__/tags/recurse.marko_4_renderer", "LOADING...");
const $input_level$await$content = /* @__PURE__ */_$.dynamicClosureRead("input_level", ($scope, input_level) => $input($scope["#childScope/0"], {
  level: input_level - 1
}), $scope => $scope._._._);
const $setup$await$content = $scope => {
  $setup($scope["#childScope/0"]);
};
const $await_content = /* @__PURE__ */_$.createRenderer(`<!>${_recurse_template}<!>`, /* beginChild, _recurse_walks, endChild */`D/${_recurse_walks}&D`, $setup$await$content, 0, $scope => $input_level$await$content($scope));
const $await$try$content = /* @__PURE__ */_$.awaitTag("#text/0", $await_content);
const $setup$try$content = $scope => {
  $await$try$content($scope, new Promise(setImmediate));
};
const $try_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", $setup$try$content);
const $try$if$content = /* @__PURE__ */_$.createTry("#text/1", $try_content);
const $input_level$if$content = /* @__PURE__ */_$.conditionalClosure("input_level", "#text/0", 0, ($scope, input_level) => _$.attr($scope["#div/0"], "data-level", input_level));
const $setup$if$content = $scope => {
  $try$if$content($scope, {
    placeholder: _$.attrTag({
      content: $placeholder_content($scope)
    })
  });
};
const $if_content = /* @__PURE__ */_$.createRenderer("<div><!></div>", /* get, next(1), replace */" D%", $setup$if$content, 0, $scope => $input_level$if$content._($scope));
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
const $input_level_closure = /* @__PURE__ */_$.dynamicClosure($input_level$await$content);
export const $input_level = /* @__PURE__ */_$.value("input_level", ($scope, input_level) => {
  $if($scope, input_level ? 0 : 1);
  $input_level$if$content($scope);
  $input_level_closure($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_level($scope, input.level));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/recurse.marko", $template, $walks, $setup, $input);