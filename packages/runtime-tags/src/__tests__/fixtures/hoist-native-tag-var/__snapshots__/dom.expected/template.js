export const $template = `<!><!>${_child_template}<hr><!><!>`;
export const $walks = /* replace, over(1), beginChild, _child_walks, endChild, over(1), replace, over(1) */`D%b/${_child_walks}&b%bD`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $get_el = _$.nodeRef("__tests__/template.marko_2/#div", "Getter:#div/0");
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $get$hoisted_el = _$.hoist("Getter:#div/0", "ConditionalScope:#text/2");
const $if_content3 = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const $get$hoisted_el2 = _$.register("__tests__/template.marko_0_$hoisted_el/hoist", _$.hoist("Getter:#div/0", "ConditionalScope:#text/0", "ConditionalScope:#text/0"));
const $setup$if$content = $scope => {
  _child($scope["#childScope/1"]);
  _child_input($scope["#childScope/1"], {
    value: $get_el($scope)
  });
};
const $if_content2 = /* @__PURE__ */_$.createRenderer(`<div></div>${_child_template}`, /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`, $setup$if$content);
const $if$if$content = /* @__PURE__ */_$.conditional("#text/0", $if_content2);
const $input_show$if$content = /* @__PURE__ */_$.conditionalClosure("input_show", "#text/0", 0, ($scope, input_show) => $if$if$content($scope, input_show ? 0 : 1));
const $setup$if$content2 = $input_show$if$content;
const $if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", $setup$if$content2);
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
export const $input_show = /* @__PURE__ */_$.value("input_show", ($scope, input_show) => {
  $if($scope, input_show ? 0 : 1);
  $input_show$if$content($scope);
});
const $if2 = /* @__PURE__ */_$.conditional("#text/2", $if_content3);
const $hoisted_el3 = /* @__PURE__ */_$.value("$hoisted_el", ($scope, $hoisted_el) => _child_input($scope["#childScope/1"], {
  value: $hoisted_el
}));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  {
    const first = $get$hoisted_el2($scope)();
    if (first) {
      first.innerHTML = 'Hello World';
    }
  }
  {
    const first = $get$hoisted_el($scope)();
    if (first) {
      first.innerHTML = 'Hello World';
    }
  }
});
export function $setup($scope) {
  _child($scope["#childScope/1"]);
  $if2($scope, true ? 0 : 1);
  $hoisted_el3($scope, $get$hoisted_el2($scope));
  $setup_effect($scope);
}
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);