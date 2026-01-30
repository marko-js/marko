export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
export const $setup = () => {};
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $if_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    foo: "bar",
    output: $output_getter($scope._)
  });
};
import * as _ from "@marko/runtime-tags/debug/dom";
const $output_getter = _._el("__tests__/template.marko_0_#div", "#div/0");
const $if = /* @__PURE__ */_._if("#text/1", _child_template, /* <child> */`/${_child_walks}&`, $if_content__setup);
export const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
export const $input = ($scope, input) => $input_show($scope, input.show);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);