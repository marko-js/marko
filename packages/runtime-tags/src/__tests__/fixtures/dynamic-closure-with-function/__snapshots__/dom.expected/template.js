export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content2__bar__OR__foo = /* @__PURE__ */_._or(1, $scope => {
  let {
    _: {
      _: {
        bar
      },
      foo
    }
  } = $scope;
  _._text($scope["#text/0"], bar(foo));
});
const $if_content2__bar = /* @__PURE__ */_._closure_get("bar", $if_content2__bar__OR__foo, $scope => $scope._._);
const $if_content2__foo = /* @__PURE__ */_._if_closure("foo", "#text/0", 0, $if_content2__bar__OR__foo);
const $if_content2__setup = $scope => {
  $if_content2__bar($scope);
  $if_content2__foo._($scope);
};
const $if_content2 = /* @__PURE__ */_._content_branch("<div> </div>", /* next(1), get, out(1) */"D l", $if_content2__setup);
const $if_content__foo = /* @__PURE__ */_._const("foo");
const $if_content__setup = $scope => {
  $if_content__input_b._($scope);
  $if_content__foo($scope, "foo");
};
const $if_content__if = /* @__PURE__ */_._if("#text/0", $if_content2);
const $if_content__input_b = /* @__PURE__ */_._if_closure("input_b", "#text/0", 0, ($scope, input_b) => $if_content__if($scope, input_b ? 0 : 1));
const $if_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $bar2__closure = /* @__PURE__ */_._closure($if_content2__bar);
const $bar2 = /* @__PURE__ */_._const("bar", $bar2__closure);
export const $input_c = /* @__PURE__ */_._const("input_c", ($scope, input_c) => $bar2($scope, $bar($scope)));
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export const $input_a = /* @__PURE__ */_._const("input_a", ($scope, input_a) => $if($scope, input_a ? 0 : 1));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_c($scope, input.c);
  $input_a($scope, input.a);
  $input_b($scope, input.b);
});
export const $input_b = /* @__PURE__ */_._const("input_b", $if_content__input_b);
function $bar({
  input_c
}) {
  return function (test) {
    return input_c + test;
  };
}
_._resume("__tests__/template.marko_0/bar", $bar);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);