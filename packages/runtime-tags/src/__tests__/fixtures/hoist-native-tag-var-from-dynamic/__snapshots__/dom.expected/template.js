export const $template = `<!>${_child_template}<!><!><!>`;
export const $walks = /* beginChild, _child_walks, endChild, replace, over(1), replace, over(1) */`D/${_child_walks}&%b%bD`;
import Child from "./tags/child.marko";
import { $setup as _child, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_el = _$.hoist("Getter:#p/0", "ClosureScopes:4");
const $inputshowsectionnull_content = _$.registerContent("__tests__/template.marko_4_renderer", "<p></p>", /* get */" ", 0, 0, 0, "ClosureScopes:4");
const $get$hoisted_el2 = _$.register("__tests__/template.marko_2_$hoisted_el2/hoist", _$.hoist("Getter:#div/0", "ClosureScopes:3"));
const $get$hoisted_el3 = _$.register("__tests__/template.marko_0_$hoisted_el3/hoist", _$.hoist("Getter:#div/0", "ClosureScopes:3", "ClosureScopes:2"));
const $child_content2 = /* @__PURE__ */_$.createContent("__tests__/template.marko_3_renderer", "<div></div>", /* get */" ", 0, 0, 0, "ClosureScopes:3");
const $hoisted_el2$inputshowChildnull$content_effect = _$.effect("__tests__/template.marko_2_$hoisted_el2", ({
  $hoisted_el2
}) => {
  for (const element of $hoisted_el2) {
    element().classList.add('inner');
  }
});
const $hoisted_el2$inputshowChildnull$content = /* @__PURE__ */_$.value("$hoisted_el2", $hoisted_el2$inputshowChildnull$content_effect);
const $setup$inputshowChildnull$content = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content2($scope));
  $hoisted_el2$inputshowChildnull$content($scope, $get$hoisted_el2($scope));
};
const $inputshowChildnull_content = _$.registerContent("__tests__/template.marko_2_renderer", `<!>${_child_template}<!>`, /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`, $setup$inputshowChildnull$content, 0, 0, "ClosureScopes:2");
const $get$hoisted_el4 = _$.register("__tests__/template.marko_0_$hoisted_el/hoist", _$.hoist("Getter:#span/0", "ClosureScopes:1"));
const $child_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<span></span>", /* get */" ", 0, 0, 0, "ClosureScopes:1");
const $hoisted_el6_effect = _$.effect("__tests__/template.marko_0_$hoisted_el3", ({
  $hoisted_el3
}) => {
  for (const element of $hoisted_el3) {
    element().classList.add('outer');
  }
});
const $hoisted_el6 = /* @__PURE__ */_$.value("$hoisted_el3", $hoisted_el6_effect);
const $hoisted_el5_effect = _$.effect("__tests__/template.marko_0_$hoisted_el", ({
  $hoisted_el
}) => {
  for (const element of $hoisted_el) {
    element().innerHTML = 'Hoist from custom tag';
  }
});
const $hoisted_el5 = /* @__PURE__ */_$.value("$hoisted_el", $hoisted_el5_effect);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
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
  $setup_effect($scope);
}
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1", $inputshowChildnull_content);
const $dynamicTag2 = /* @__PURE__ */_$.dynamicTag("#text/2", $inputshowsectionnull_content);
export const $input_show = /* @__PURE__ */_$.value("input_show", ($scope, input_show) => {
  $dynamicTag($scope, input_show ? Child : null);
  $dynamicTag2($scope, input_show ? 'section' : null);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);