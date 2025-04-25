export const $template = `<!><!>${_thing_template}<!><!><!><!>`;
export const $walks = /* replace, over(1), beginChild, _thing_walks, endChild, replace, over(1), replace, over(1), replace, over(1) */`D%b/${_thing_walks}&%b%b%bD`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _thing, $input_value as _thing_input_value, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
const $setup$if$content4_effect = _$.effect("__tests__/template.marko_5", $scope => $get$hoisted_setHtml($scope._)("Hello world"));
const $setup$if$content4 = $setup$if$content4_effect;
const $if_content5 = /* @__PURE__ */_$.createRenderer(0, 0, $setup$if$content4);
const $get$hoisted_setHtml = _$.hoist("setHtml3", "ConditionalScope:#text/3");
const $setHtml3$if$content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const $setup$if$content3 = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml3$if$content);
  _child($scope["#childScope/0"]);
};
const $if_content4 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$if$content3);
const $get$hoisted_setHtml2 = _$.hoist("setHtml2", "ConditionalScope:#text/2");
const $setHtml2$if$content = _$.registerBoundSignal("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const $setup$if$content2 = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml2$if$content);
  _child($scope["#childScope/0"]);
};
const $if_content3 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$if$content2);
const $get$hoisted_setHtml3 = _$.register("__tests__/template.marko_0_$hoisted_setHtml/hoist", _$.hoist("setHtml", "ConditionalScope:#text/0", "ConditionalScope:#text/0"));
const $setHtml$if$content = _$.registerBoundSignal("__tests__/template.marko_2_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const $setup$if$content = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml$if$content);
  _child($scope["#childScope/0"]);
};
const $if_content2 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$if$content);
const $if$if$content = /* @__PURE__ */_$.conditional("#text/0", $if_content2);
const $input_show$if$content = /* @__PURE__ */_$.conditionalClosure("input_show", "#text/0", 0, ($scope, input_show) => $if$if$content($scope, input_show ? 0 : 1));
const $setup$if$content5 = $input_show$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", $setup$if$content5);
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
export const $input_show = /* @__PURE__ */_$.value("input_show", ($scope, input_show) => {
  $if($scope, input_show ? 0 : 1);
  $input_show$if$content($scope);
});
const $if2 = /* @__PURE__ */_$.conditional("#text/2", $if_content3);
const $if3 = /* @__PURE__ */_$.conditional("#text/3", $if_content4);
const $if4 = /* @__PURE__ */_$.conditional("#text/4", $if_content5);
const $hoisted_setHtml4 = /* @__PURE__ */_$.value("$hoisted_setHtml", ($scope, $hoisted_setHtml) => _thing_input_value($scope["#childScope/1"], $hoisted_setHtml));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  $get$hoisted_setHtml3($scope)("Hello world");
  $get$hoisted_setHtml2($scope)("Hello world");
});
export function $setup($scope) {
  _thing($scope["#childScope/1"]);
  $if2($scope, true ? 0 : 1);
  $if3($scope, true ? 0 : 1);
  $if4($scope, true ? 0 : 1);
  $hoisted_setHtml4($scope, $get$hoisted_setHtml3($scope));
  $setup_effect($scope);
}
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);