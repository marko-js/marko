export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $n$for$content = /* @__PURE__ */_$.value("n", ($scope, n) => _$.data($scope["#text/0"], n));
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $n$for$content($scope, $params2[0]));
const $for_content = /* @__PURE__ */_$.createRenderer("<!>, ", /* replace */"%", 0, $params2$for$content);
const $for = /* @__PURE__ */_$.loopTo("#div/0", $for_content);
const $expr_input_from_input_to_input_step = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    input_from,
    input_to,
    input_step
  } = $scope;
  $for($scope, [input_to, input_from, input_step]);
}, 2);
export const $input_from = /* @__PURE__ */_$.value("input_from", $expr_input_from_input_to_input_step);
export const $input_to = /* @__PURE__ */_$.value("input_to", $expr_input_from_input_to_input_step);
export const $input_step = /* @__PURE__ */_$.value("input_step", $expr_input_from_input_to_input_step);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_from($scope, input.from);
  $input_to($scope, input.to);
  $input_step($scope, input.step);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);