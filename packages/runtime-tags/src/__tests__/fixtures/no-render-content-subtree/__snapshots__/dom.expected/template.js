export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
export const $setup = () => {};
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $if_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    foo: "bar",
    output: $getdiv($scope._)
  });
};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content = /* @__PURE__ */_._content_branch(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $if_content__setup);
const $getdiv = _._el("__tests__/template.marko_0/#div", "Getter:#div/0");
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
export const $input_show = /* @__PURE__ */_._const("input_show", $scope => $if($scope, $scope.input_show ? 0 : 1));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_show($scope, $scope.input.show));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);