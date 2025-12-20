export const $template = `<!>${_child_template}<!><!><!><!>`;
export const $walks = /* over(1), <child/var>, dynamicTagWithVar, over(1), dynamicTagWithVar, over(1), dynamicTagWithVar, over(2) */`b0${_child_walks}&1b1b1c`;
import child from "./tags/child/index.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child/index.marko";
const $data = _._var_resume("__tests__/template.marko_0_data1/var", ($scope, data1) => {});
export function $setup($scope) {
  _._var($scope, "#childScope/0", $data);
  _child($scope["#childScope/0"]);
}
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2", 0, () => $data2);
const $data2 = _._var_resume("__tests__/template.marko_0_data2/var", ($scope, data2) => {});
const $dynamicTag3 = /* @__PURE__ */_._dynamic_tag("#text/6", 0, () => $el);
export const $input_show = ($scope, input_show) => {
  $dynamicTag($scope, input_show && child);
  $dynamicTag3($scope, input_show && "div");
};
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/4", 0, () => $data3);
const $data3 = _._var_resume("__tests__/template.marko_0_data3/var", ($scope, data3) => {});
export const $input_dynamic = ($scope, input_dynamic) => $dynamicTag2($scope, input_dynamic);
const $el = _._var_resume("__tests__/template.marko_0_el1/var", ($scope, el1) => {});
export const $input = ($scope, input) => {
  $input_show($scope, input.show);
  $input_dynamic($scope, input.dynamic);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);