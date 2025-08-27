export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $get_output = _$.nodeRef("__tests__/template.marko_0/#div", "Getter:#div/0");
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $setup$if$content = $scope => {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    foo: "bar",
    output: $get_output($scope._)
  });
};
const $if_content = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
export const $input_show = /* @__PURE__ */_$.value("input_show", ($scope, input_show) => $if($scope, input_show ? 0 : 1));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);