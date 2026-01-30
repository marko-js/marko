export const $template = `<!>${_child_template}<!><!><!>`;
export const $walks = /* over(1), <child>, replace, over(1), replace, over(2) */`b/${_child_walks}&%b%c`;
import Child from "./tags/child.marko";
import { $setup as _child, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $el3_getter = _._hoist("#p/0", "ClosureScopes:4");
const $inputshowsectionnull_content = _._content_resume("__tests__/template.marko_4_content", "<p></p>", /* get, over(1) */" b", 0, 0, "ClosureScopes:4");
const $inputshowChildnull_content__$el2_getter = _._hoist_resume("__tests__/template.marko_2_#div/hoist", "#div/0", "ClosureScopes:3");
const $el2_getter = _._hoist_resume("__tests__/template.marko_0_#div/hoist", "#div/0", "ClosureScopes:3", "ClosureScopes:2");
const $child_content2 = /* @__PURE__ */_._content("__tests__/template.marko_3_content", "<div></div>", /* get, over(1) */" b", 0, 0, "ClosureScopes:3");
const $inputshowChildnull_content__setup__script = _._script("__tests__/template.marko_2", $scope => {
  for (const el of $inputshowChildnull_content__$el2_getter($scope)) {
    el.classList.add('inner');
  }
});
const $inputshowChildnull_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content2($scope));
  $inputshowChildnull_content__setup__script($scope);
};
const $inputshowChildnull_content = _._content_resume("__tests__/template.marko_2_content", `<!>${_child_template}<!>`, /* over(1), <child>, over(1) */`b/${_child_walks}&b`, $inputshowChildnull_content__setup, 0, "ClosureScopes:2");
const $el_getter = _._hoist_resume("__tests__/template.marko_0_#span/hoist", "#span/0", "ClosureScopes:1");
const $child_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<span></span>", /* get, over(1) */" b", 0, 0, "ClosureScopes:1");
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  for (const el of $el_getter($scope)) {
    el.innerHTML = 'Hoist from custom tag';
  }
  for (const el of $el2_getter($scope)) {
    el.classList.add('outer');
  }
  {
    const el = $el3_getter($scope)();
    if (el) {
      el.innerHTML = 'Hoist from dynamic tag';
    }
  }
});
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
  $setup__script($scope);
}
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1", $inputshowChildnull_content);
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/2", $inputshowsectionnull_content);
export const $input_show = ($scope, input_show) => {
  $dynamicTag($scope, input_show ? Child : null);
  $dynamicTag2($scope, input_show ? 'section' : null);
};
export const $input = ($scope, input) => $input_show($scope, input.show);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);