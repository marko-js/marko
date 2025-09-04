export const $template = `<!>${_child_template}<!><!><!>`;
export const $walks = /* over(1), beginChild, _child_walks, endChild, replace, over(1), replace, over(2) */`b/${_child_walks}&%b%c`;
import Child from "./tags/child.marko";
import { $setup as _child, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_el = _._hoist("Getter:#p/0", "ClosureScopes:4");
const $inputshowsectionnull_content = _._content_resume("__tests__/template.marko_4_content", "<p></p>", /* get, over(1) */" b", 0, 0, "ClosureScopes:4");
const $get$hoisted_el2 = _._resume("__tests__/template.marko_2_$hoisted_el2/hoist", _._hoist("Getter:#div/0", "ClosureScopes:3"));
const $get$hoisted_el3 = _._resume("__tests__/template.marko_0_$hoisted_el3/hoist", _._hoist("Getter:#div/0", "ClosureScopes:3", "ClosureScopes:2"));
const $child_content2 = /* @__PURE__ */_._content("__tests__/template.marko_3_content", "<div></div>", /* get, over(1) */" b", 0, 0, "ClosureScopes:3");
const $inputshowChildnull_content__$hoisted_el__script = _._script("__tests__/template.marko_2_$hoisted_el2", ({
  $hoisted_el2
}) => {
  for (const element of $hoisted_el2) {
    element().classList.add('inner');
  }
});
const $inputshowChildnull_content__$hoisted_el = /* @__PURE__ */_._const("$hoisted_el2", $inputshowChildnull_content__$hoisted_el__script);
const $inputshowChildnull_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content2($scope));
  $inputshowChildnull_content__$hoisted_el($scope, $get$hoisted_el2($scope));
};
const $inputshowChildnull_content = _._content_resume("__tests__/template.marko_2_content", `<!>${_child_template}<!>`, /* over(1), beginChild, _child_walks, endChild, over(1) */`b/${_child_walks}&b`, $inputshowChildnull_content__setup, 0, "ClosureScopes:2");
const $get$hoisted_el4 = _._resume("__tests__/template.marko_0_$hoisted_el/hoist", _._hoist("Getter:#span/0", "ClosureScopes:1"));
const $child_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<span></span>", /* get, over(1) */" b", 0, 0, "ClosureScopes:1");
const $hoisted_el6__script = _._script("__tests__/template.marko_0_$hoisted_el3", ({
  $hoisted_el3
}) => {
  for (const element of $hoisted_el3) {
    element().classList.add('outer');
  }
});
const $hoisted_el6 = /* @__PURE__ */_._const("$hoisted_el3", $hoisted_el6__script);
const $hoisted_el5__script = _._script("__tests__/template.marko_0_$hoisted_el", ({
  $hoisted_el
}) => {
  for (const element of $hoisted_el) {
    element().innerHTML = 'Hoist from custom tag';
  }
});
const $hoisted_el5 = /* @__PURE__ */_._const("$hoisted_el", $hoisted_el5__script);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  {
    const element = $get$hoisted_el($scope)();
    if (element) {
      element.innerHTML = 'Hoist from dynamic tag';
    }
  }
});
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
  $hoisted_el6($scope, $get$hoisted_el3($scope));
  $hoisted_el5($scope, $get$hoisted_el4($scope));
  $setup__script($scope);
}
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1", $inputshowChildnull_content);
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/2", $inputshowsectionnull_content);
export const $input_show = /* @__PURE__ */_._const("input_show", ($scope, input_show) => {
  $dynamicTag($scope, input_show ? Child : null);
  $dynamicTag2($scope, input_show ? 'section' : null);
});
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);