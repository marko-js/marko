export const $template = `${_child_template}<button>Toggle</button>`;
export const $walks = /* beginChild, _child_walks, endChild, get, over(1) */`/${_child_walks}& b`;
import { $setup as _child, $input_thing as _child_input_thing, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $myThing_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<span>The thing</span>", /* over(1) */"b");
const $myThing = /* @__PURE__ */_._const("myThing", ($scope, myThing) => _child_input_thing($scope["#childScope/0"], myThing));
const $selected__script = _._script("__tests__/template.marko_0_selected", ($scope, {
  selected
}) => _._on($scope["#button/1"], "click", function () {
  $selected($scope, selected = !selected);
}));
const $selected = /* @__PURE__ */_._let("selected/2", ($scope, selected) => {
  $myThing($scope, {
    selected: selected,
    content: $myThing_content($scope)
  });
  $selected__script($scope);
});
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  $selected($scope, false);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);