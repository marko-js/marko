export const $template = `<!><!>${_thing_template}<!><!><!><!>`;
export const $walks = /* over(1), replace, over(1), beginChild, _thing_walks, endChild, replace, over(1), replace, over(1), replace, over(2) */`b%b/${_thing_walks}&%b%b%c`;
import Child from "./tags/child.marko";
import { $setup as _thing, $input_value as _thing_input_value, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content5__setup__script = _._script("__tests__/template.marko_5", $scope => $get$hoisted_setHtml($scope._)("Hello world"));
const $if_content5__setup = $if_content5__setup__script;
const $if_content5 = /* @__PURE__ */_._content_branch(0, 0, $if_content5__setup);
const $get$hoisted_setHtml = _._hoist("setHtml3", "ConditionalScope:#text/3");
const $if_content4__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $if_content4__setHtml);
const $if_content4__setHtml = _._var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_._const("setHtml3"));
const $if_content4__setup = $scope => {
  $if_content4__dynamicTag($scope, 1 && Child);
};
const $if_content4 = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), dynamicTagWithVar, over(2) */"b1c", $if_content4__setup);
const $get$hoisted_setHtml2 = _._hoist("setHtml2", "ConditionalScope:#text/2");
const $if_content3__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $if_content3__setHtml);
const $if_content3__setHtml = _._var_resume("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_._const("setHtml2"));
const $if_content3__setup = $scope => {
  $if_content3__dynamicTag($scope, 1 && Child);
};
const $if_content3 = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), dynamicTagWithVar, over(2) */"b1c", $if_content3__setup);
const $get$hoisted_setHtml3 = _._resume("__tests__/template.marko_0_$hoisted_setHtml/hoist", _._hoist("setHtml", "ConditionalScope:#text/0", "ConditionalScope:#text/0"));
const $if_content2__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, () => $if_content2__setHtml);
const $if_content2__setHtml = _._var_resume("__tests__/template.marko_2_setHtml/var", /* @__PURE__ */_._const("setHtml"));
const $if_content2__setup = $scope => {
  $if_content2__dynamicTag($scope, 1 && Child);
};
const $if_content2 = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), dynamicTagWithVar, over(2) */"b1c", $if_content2__setup);
const $if_content__if = /* @__PURE__ */_._if("#text/0", $if_content2);
const $if_content__input_show = /* @__PURE__ */_._if_closure("input_show", "#text/0", 0, ($scope, input_show) => $if_content__if($scope, input_show ? 0 : 1));
const $if_content__setup = $if_content__input_show;
const $if_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export const $input_show = /* @__PURE__ */_._const("input_show", ($scope, input_show) => {
  $if($scope, input_show ? 0 : 1);
  $if_content__input_show($scope);
});
const $if2 = /* @__PURE__ */_._if("#text/2", $if_content3);
const $if3 = /* @__PURE__ */_._if("#text/3", $if_content4);
const $if4 = /* @__PURE__ */_._if("#text/4", $if_content5);
const $hoisted_setHtml4 = /* @__PURE__ */_._const("$hoisted_setHtml", ($scope, $hoisted_setHtml) => _thing_input_value($scope["#childScope/1"], $hoisted_setHtml));
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  $get$hoisted_setHtml3($scope)("Hello world");
  $get$hoisted_setHtml2($scope)("Hello world");
});
export function $setup($scope) {
  _thing($scope["#childScope/1"]);
  $if2($scope, true ? 0 : 1);
  $if3($scope, true ? 0 : 1);
  $if4($scope, true ? 0 : 1);
  $hoisted_setHtml4($scope, $get$hoisted_setHtml3($scope));
  $setup__script($scope);
}
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);