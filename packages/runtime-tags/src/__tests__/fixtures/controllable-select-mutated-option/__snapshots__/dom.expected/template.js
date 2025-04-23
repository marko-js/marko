export const $template = "<form><select></select><button type=reset>reset</button></form><div> </div><button class=remove>Remove option</button><button class=add>Add option</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), get, over(1), get, over(1) */"D lD l b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $opt$for$content = /* @__PURE__ */_$.value("opt", ($scope, opt) => {
  _$.attr($scope["#option/0"], "value", opt);
  _$.data($scope["#text/1"], opt);
});
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $opt$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<option> </option>", /* get, next(1), get */" D ", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#select/0", $for_content);
const $options_effect = _$.effect("__tests__/template.marko_0_options", ($scope, {
  options
}) => {
  _$.on($scope["#button/2"], "click", function () {
    $options($scope, options.slice(1));
  });
  _$.on($scope["#button/3"], "click", function () {
    $options($scope, [options.length ? options[0] - 1 : 3, ...options]);
  });
});
const $options = /* @__PURE__ */_$.state("options/4", ($scope, options) => {
  $options_($scope, options?.[0]);
  $for($scope, [options, v => v]);
  $options_effect($scope);
});
const $value = /* @__PURE__ */_$.state("value/6", ($scope, value) => {
  _$.controllable_select_value($scope, "#select/0", value, $valueChange($scope));
  _$.data($scope["#text/1"], value);
});
const $options_ = /* @__PURE__ */_$.value("options_0", $value);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  _$.controllable_select_value_effect($scope, "#select/0");
  _$.on($scope["#select/0"], "change", console.log);
  _$.on($scope["#select/0"], "input", console.log);
});
export function $setup($scope) {
  $options($scope, [1, 2, 3]);
  $setup_effect($scope);
}
function $valueChange($scope) {
  return _new_value => {
    $value($scope, _new_value);
  };
}
_$.register("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);