export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_bar_foo$if$content = /* @__PURE__ */_$.intersection(1, $scope => {
  let {
    _: {
      _: {
        bar
      },
      foo
    }
  } = $scope;
  _$.data($scope["#text/0"], bar(foo));
});
const $bar$if$content = /* @__PURE__ */_$.dynamicClosureRead("bar", $expr_bar_foo$if$content, $scope => $scope._._);
const $foo$if$content2 = /* @__PURE__ */_$.conditionalClosure("foo", "#text/0", 0, $expr_bar_foo$if$content);
const $setup$if$content2 = $scope => {
  $bar$if$content($scope);
  $foo$if$content2._($scope);
};
const $if_content2 = /* @__PURE__ */_$.createRenderer("<div> </div>", /* next(1), get, out(1) */"D l", $setup$if$content2);
const $foo$if$content = /* @__PURE__ */_$.value("foo");
const $setup$if$content = $scope => {
  $input_b$if$content._($scope);
  $foo$if$content($scope, "foo");
};
const $if$if$content = /* @__PURE__ */_$.conditional("#text/0", $if_content2);
const $input_b$if$content = /* @__PURE__ */_$.conditionalClosure("input_b", "#text/0", 0, ($scope, input_b) => $if$if$content($scope, input_b ? 0 : 1));
const $if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* over(1), replace, over(2) */"b%c", $setup$if$content);
const $bar2_closure = /* @__PURE__ */_$.dynamicClosure($bar$if$content);
const $bar2 = /* @__PURE__ */_$.value("bar", $bar2_closure);
export const $input_c = /* @__PURE__ */_$.value("input_c", ($scope, input_c) => $bar2($scope, $bar($scope)));
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
export const $input_a = /* @__PURE__ */_$.value("input_a", ($scope, input_a) => $if($scope, input_a ? 0 : 1));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_c($scope, input.c);
  $input_a($scope, input.a);
  $input_b($scope, input.b);
});
export const $input_b = /* @__PURE__ */_$.value("input_b", $input_b$if$content);
function $bar({
  input_c
}) {
  return function (test) {
    return input_c + test;
  };
}
_$.register("__tests__/template.marko_0/bar", $bar);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);