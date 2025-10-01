export const $template = "<div></div><button> </button>";
export const $walks = /* get, over(1), get, next(1), get, out(1) */" b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__getMessage = /* @__PURE__ */_._if_closure("getMessage", "#div/0", 0, ($scope, getMessage) => _._text($scope["#text/0"], getMessage()));
const $if_content__setup = $if_content__getMessage;
const $if_content = /* @__PURE__ */_._content_branch("<span> </span>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $if = /* @__PURE__ */_._if("#div/0", $if_content);
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/1"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/6", ($scope, x) => {
  _._text($scope["#text/2"], x);
  $if($scope, x ? 0 : 1);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 0);
}
const $getMessage2 = /* @__PURE__ */_._const("getMessage", $if_content__getMessage);
export const $input_message = /* @__PURE__ */_._const("input_message", ($scope, input_message) => $getMessage2($scope, $getMessage($scope)));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_message($scope, input.message));
function $getMessage({
  input_message
}) {
  return () => input_message;
}
_._resume("__tests__/template.marko_0/getMessage", $getMessage);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);