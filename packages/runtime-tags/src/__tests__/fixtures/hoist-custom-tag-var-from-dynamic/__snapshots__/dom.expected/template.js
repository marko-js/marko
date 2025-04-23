export const $template = `<!>${_thing_template}<!><!><!>`;
export const $walks = /* beginChild, _thing_walks, endChild, replace, over(1), replace, over(1) */`D/${_thing_walks}&%b%bD`;
import Thing from "./tags/thing.marko";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _thing, $input_content as _thing_input_content, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
const $get$hoisted_setHtml = _$.hoist("setHtml3", "ClosureScopes:4");
const $setHtml3$inputshowsectionnull$content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const $setup$inputshowsectionnull$content = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml3$inputshowsectionnull$content);
  _child($scope["#childScope/0"]);
};
const $inputshowsectionnull_content = _$.registerContent("__tests__/template.marko_4_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$inputshowsectionnull$content, 0, 0, "ClosureScopes:4");
const $get$hoisted_setHtml2 = _$.hoist("setHtml2", "ClosureScopes:3", "ClosureScopes:2");
const $setHtml2$thing$content = _$.registerBoundSignal("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const $setup$thing$content2 = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml2$thing$content);
  _child($scope["#childScope/0"]);
};
const $thing_content2 = /* @__PURE__ */_$.createContent("__tests__/template.marko_3_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$thing$content2, 0, 0, "ClosureScopes:3");
const $setup$inputshowThingnull$content = $scope => {
  _thing($scope["#childScope/0"]);
  _thing_input_content($scope["#childScope/0"], $thing_content2($scope));
};
const $inputshowThingnull_content = _$.registerContent("__tests__/template.marko_2_renderer", `<!>${_thing_template}<!>`, /* beginChild, _thing_walks, endChild */`D/${_thing_walks}&D`, $setup$inputshowThingnull$content, 0, 0, "ClosureScopes:2");
const $get$hoisted_setHtml3 = _$.register("__tests__/template.marko_0_$hoisted_setHtml/hoist", _$.hoist("setHtml", "ClosureScopes:1"));
const $setHtml$thing$content = _$.registerBoundSignal("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const $setup$thing$content = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml$thing$content);
  _child($scope["#childScope/0"]);
};
const $thing_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$thing$content, 0, 0, "ClosureScopes:1");
const $hoisted_setHtml4_effect = _$.effect("__tests__/template.marko_0_$hoisted_setHtml", ({
  $hoisted_setHtml
}) => {
  for (const fn of $hoisted_setHtml) {
    fn('Hoist from custom tag');
  }
});
const $hoisted_setHtml4 = /* @__PURE__ */_$.value("$hoisted_setHtml", $hoisted_setHtml4_effect);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  $get$hoisted_setHtml2($scope)('Hoist from dynamic tag');
  $get$hoisted_setHtml($scope)('Hoist from dynamic tag');
});
export function $setup($scope) {
  _thing($scope["#childScope/0"]);
  _thing_input_content($scope["#childScope/0"], $thing_content($scope));
  $hoisted_setHtml4($scope, $get$hoisted_setHtml3($scope));
  $setup_effect($scope);
}
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1", $inputshowThingnull_content);
const $dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/2", $inputshowsectionnull_content);
export const $input_show = /* @__PURE__ */_$.value("input_show", ($scope, input_show) => {
  $dynamicTag($scope, input_show ? Thing : null);
  $dynamicTag2($scope, input_show ? 'section' : null);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);