export const $template = `<!>${_thing_template}<!>`;
export const $walks = /* beginChild, _thing_walks, endChild */`D/${_thing_walks}&D`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _thing, $input_what as _thing_input_what, $template as _thing_template, $walks as _thing_walks } from "./tags/thing.marko";
const $get$hoisted_setHtml = _$.register("__tests__/template.marko_0_$hoisted_setHtml/hoist", _$.hoist("setHtml", "ClosureScopes:1"));
const $setHtml$what$content = _$.registerBoundSignal("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const $setup$what$content = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml$what$content);
  _child($scope["#childScope/0"]);
};
const $what_content = _$.registerContent("__tests__/template.marko_1_renderer", _child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$what$content, 0, "ClosureScopes:1");
const $hoisted_setHtml2_effect = _$.effect("__tests__/template.marko_0_$hoisted_setHtml", ({
  $hoisted_setHtml
}) => {
  for (const fn of $hoisted_setHtml) {
    fn('Hoist from custom tag');
  }
});
const $hoisted_setHtml2 = /* @__PURE__ */_$.value("$hoisted_setHtml", $hoisted_setHtml2_effect);
export function $setup($scope) {
  _thing($scope["#childScope/0"]);
  _thing_input_what($scope["#childScope/0"], _$.attrTag({
    content: $what_content($scope)
  }));
  $hoisted_setHtml2($scope, $get$hoisted_setHtml($scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);