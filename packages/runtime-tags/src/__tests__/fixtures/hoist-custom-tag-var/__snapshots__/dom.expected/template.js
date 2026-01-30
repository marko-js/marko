export const $template = `<!><!>${_thing_template}<!><!><!><!>`;
export const $walks = /* over(1), replace, over(1), <thing>, replace, over(1), replace, over(1), replace, over(2) */`b%b/${_thing_walks}&%b%b%c`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import { $setup as _thing, $input_value as _thing_input_value, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
const $if_content5__setup__script = _._script("__tests__/template.marko_5", $scope => $setHtml3_getter($scope._)()("Hello world"));
const $if_content5__setup = $if_content5__setup__script;
const $setHtml3_getter = _._hoist("setHtml3", "BranchScopes:#text/3");
const $if_content4__setHtml = _._var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_._const("setHtml3", $scope => _._assert_hoist($scope.setHtml3)));
const $if_content4__setup = $scope => {
  _._var($scope, "#childScope/0", $if_content4__setHtml);
  _child($scope["#childScope/0"]);
};
const $setHtml2_getter = _._hoist("setHtml2", "BranchScopes:#text/2");
const $if_content3__setHtml = _._var_resume("__tests__/template.marko_3_setHtml2/var", /* @__PURE__ */_._const("setHtml2", $scope => _._assert_hoist($scope.setHtml2)));
const $if_content3__setup = $scope => {
  _._var($scope, "#childScope/0", $if_content3__setHtml);
  _child($scope["#childScope/0"]);
};
const $setHtml_getter = _._hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml", "BranchScopes:#text/0", "BranchScopes:#text/0");
const $if_content2__setHtml = _._var_resume("__tests__/template.marko_2_setHtml/var", /* @__PURE__ */_._const("setHtml", $scope => _._assert_hoist($scope.setHtml)));
const $if_content2__setup = $scope => {
  _._var($scope, "#childScope/0", $if_content2__setHtml);
  _child($scope["#childScope/0"]);
};
const $if_content__if = /* @__PURE__ */_._if("#text/0", _child_template, /* <child/var> */`0${_child_walks}&`, $if_content2__setup);
const $if_content__input_show = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => $if_content__if($scope, $scope._.input_show ? 0 : 1));
const $if_content__setup = $if_content__input_show;
const $if = /* @__PURE__ */_._if("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
export const $input_show = /* @__PURE__ */_._const("input_show", $scope => {
  $if($scope, $scope.input_show ? 0 : 1);
  $if_content__input_show($scope);
});
const $if2 = /* @__PURE__ */_._if("#text/2", _child_template, /* <child/var> */`0${_child_walks}&`, $if_content3__setup);
const $if3 = /* @__PURE__ */_._if("#text/3", _child_template, /* <child/var> */`0${_child_walks}&`, $if_content4__setup);
const $if4 = /* @__PURE__ */_._if("#text/4", 0, 0, $if_content5__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  $setHtml_getter($scope)()("Hello world");
  $setHtml2_getter($scope)()("Hello world");
});
export function $setup($scope) {
  _thing($scope["#childScope/1"]);
  _thing_input_value($scope["#childScope/1"], $setHtml_getter($scope));
  $if2($scope, true ? 0 : 1);
  $if3($scope, true ? 0 : 1);
  $if4($scope, true ? 0 : 1);
  $setup__script($scope);
}
export const $input = ($scope, input) => $input_show($scope, input.show);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);