export const $template = "<form><select></select><button type=reset>reset</button></form><div> </div><button class=remove>Remove option</button><button class=add>Add option</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), get, over(1), get, over(1) */"D lD l b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__opt = /* @__PURE__ */_._const("opt", ($scope, opt) => {
  _._attr($scope["#option/0"], "value", opt);
  _._text($scope["#text/1"], opt);
});
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__opt($scope, $params2[0]));
const $for_content = /* @__PURE__ */_._content_branch("<option> </option>", /* get, next(1), get, out(1) */" D l", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#select/0", $for_content);
const $options__script = _._script("__tests__/template.marko_0_options", ($scope, {
  options
}) => {
  _._on($scope["#button/2"], "click", function () {
    $options($scope, options = options.slice(1));
  });
  _._on($scope["#button/3"], "click", function () {
    $options($scope, options = [options?.length ? options?.[0] - 1 : 3, ...options]);
  });
});
const $options = /* @__PURE__ */_._let("options/4", ($scope, options) => {
  $options_($scope, options?.[0]);
  $for($scope, [options, v => v]);
  $options__script($scope);
});
const $value = /* @__PURE__ */_._let("value/6", ($scope, value) => {
  _._attr_select_value($scope, "#select/0", value, $valueChange($scope));
  _._text($scope["#text/1"], value);
});
const $options_ = /* @__PURE__ */_._const("options_0", $value);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_select_value_script($scope, "#select/0");
  _._on($scope["#select/0"], "change", console.log);
  _._on($scope["#select/0"], "input", console.log);
});
export function $setup($scope) {
  $options($scope, [1, 2, 3]);
  $setup__script($scope);
}
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);