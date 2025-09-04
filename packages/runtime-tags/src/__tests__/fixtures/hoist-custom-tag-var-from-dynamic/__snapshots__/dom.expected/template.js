export const $template = `<!>${_thing_template}<!><!><!>`;
export const $walks = /* over(1), beginChild, _thing_walks, endChild, replace, over(1), replace, over(2) */`b/${_thing_walks}&%b%c`;
import Thing from "./tags/thing.marko";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _thing, $input_content as _thing_input_content, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
const $get$hoisted_setHtml = _._hoist("setHtml3", "ClosureScopes:4");
const $inputshowsectionnull_content__setHtml = _._var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_._const("setHtml3"));
const $inputshowsectionnull_content__setup = $scope => {
  _._var($scope, "#childScope/0", $inputshowsectionnull_content__setHtml);
  _child($scope["#childScope/0"]);
};
const $inputshowsectionnull_content = _._content_resume("__tests__/template.marko_4_content", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $inputshowsectionnull_content__setup, 0, "ClosureScopes:4");
const $get$hoisted_setHtml2 = _._hoist("setHtml2", "ClosureScopes:3", "ClosureScopes:2");
const $thing_content2__setHtml = _._var_resume("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_._const("setHtml2"));
const $thing_content2__setup = $scope => {
  _._var($scope, "#childScope/0", $thing_content2__setHtml);
  _child($scope["#childScope/0"]);
};
const $thing_content2 = /* @__PURE__ */_._content("__tests__/template.marko_3_content", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $thing_content2__setup, 0, "ClosureScopes:3");
const $inputshowThingnull_content__setup = $scope => {
  _thing($scope["#childScope/0"]);
  _thing_input_content($scope["#childScope/0"], $thing_content2($scope));
};
const $inputshowThingnull_content = _._content_resume("__tests__/template.marko_2_content", `<!>${_thing_template}<!>`, /* over(1), beginChild, _thing_walks, endChild, over(1) */`b/${_thing_walks}&b`, $inputshowThingnull_content__setup, 0, "ClosureScopes:2");
const $get$hoisted_setHtml3 = _._resume("__tests__/template.marko_0_$hoisted_setHtml/hoist", _._hoist("setHtml", "ClosureScopes:1"));
const $thing_content__setHtml = _._var_resume("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_._const("setHtml"));
const $thing_content__setup = $scope => {
  _._var($scope, "#childScope/0", $thing_content__setHtml);
  _child($scope["#childScope/0"]);
};
const $thing_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $thing_content__setup, 0, "ClosureScopes:1");
const $hoisted_setHtml4__script = _._script("__tests__/template.marko_0_$hoisted_setHtml", ({
  $hoisted_setHtml
}) => {
  for (const fn of $hoisted_setHtml) {
    fn('Hoist from custom tag');
  }
});
const $hoisted_setHtml4 = /* @__PURE__ */_._const("$hoisted_setHtml", $hoisted_setHtml4__script);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  $get$hoisted_setHtml2($scope)('Hoist from dynamic tag');
  $get$hoisted_setHtml($scope)('Hoist from dynamic tag');
});
export function $setup($scope) {
  _thing($scope["#childScope/0"]);
  _thing_input_content($scope["#childScope/0"], $thing_content($scope));
  $hoisted_setHtml4($scope, $get$hoisted_setHtml3($scope));
  $setup__script($scope);
}
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1", $inputshowThingnull_content);
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/2", $inputshowsectionnull_content);
export const $input_show = /* @__PURE__ */_._const("input_show", ($scope, input_show) => {
  $dynamicTag($scope, input_show ? Thing : null);
  $dynamicTag2($scope, input_show ? 'section' : null);
});
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);