export const $template = `<!>${_thing_template}<!>`;
export const $walks = /* over(1), <thing>, over(1) */`b/${_thing_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import { $setup as _thing, $input_what as _thing_input_what, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
const $setHtml_getter = _._hoist_resume("__tests__/template.marko_0_setHtml/hoist", "setHtml", "ClosureScopes:1");
const $what_content__setHtml = _._var_resume("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_._const("setHtml", $scope => _._assert_hoist($scope.setHtml)));
const $what_content__setup = $scope => {
  _._var($scope, "#childScope/0", $what_content__setHtml);
  _child($scope["#childScope/0"]);
};
const $what_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", _child_template, /* <child/var> */`0${_child_walks}&`, $what_content__setup, 0, "ClosureScopes:1");
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  for (const fn of $setHtml_getter($scope)) {
    fn('Hoist from custom tag');
  }
});
export function $setup($scope) {
  _thing($scope["#childScope/0"]);
  _thing_input_what($scope["#childScope/0"], _.attrTag({
    content: $what_content($scope)
  }));
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);