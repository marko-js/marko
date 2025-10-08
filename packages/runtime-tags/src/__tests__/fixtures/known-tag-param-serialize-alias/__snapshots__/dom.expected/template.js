const $define_content__walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l",
  $define_content__template = "<div> </div><div> </div>";
export const $template = `<!>${$define_content__template}<!>`;
export const $walks = /* over(1), beginChild, $define_content__walks, endChild, over(1) */`b/${$define_content__walks}&b`;
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content__a__script = _._script("__tests__/template.marko_1_a", ({
  input_a: a
}) => {
  if (a !== "a") throw new Error("did not serialize a");
});
const $define_content__a = ($scope, a) => {
  _._text($scope["#text/0"], a);
  $define_content__a__script($scope);
};
const $define_content__b = /* @__PURE__ */_._const("b", ($scope, b) => _._text($scope["#text/1"], b));
const $define_content__input_a__script = _._script("__tests__/template.marko_1_input_a", ({
  input_a
}) => {
  if (input_a !== "a") throw new Error("did not serialize input.a");
});
const $define_content__input_a = /* @__PURE__ */_._const("input_a", ($scope, input_a) => {
  $define_content__a($scope, input_a);
  $define_content__input_a__script($scope);
});
const $define_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $define_content__input($scope, $params2[0]));
const $define_content__input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $define_content__input_a($scope, input.a);
  $define_content__b($scope, input.b);
});
export const $input_a = /* @__PURE__ */_._const("input_a", ($scope, input_a) => $define_content__input_a($scope["#childScope/0"], input_a));
export const $input_b = /* @__PURE__ */_._const("input_b", ($scope, input_b) => $define_content__b($scope["#childScope/0"], input_b));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_a($scope, input.a);
  $input_b($scope, input.b);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);