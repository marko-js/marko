export const $template = `<!><!>${_child_template}<hr><!><!>`;
export const $walks = /* over(1), replace, over(1), beginChild, _child_walks, endChild, over(1), replace, over(2) */`b%b/${_child_walks}&b%c`;
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_el = _._hoist("Getter:#div/0", "ConditionalScope:#text/2");
const $if_content3 = /* @__PURE__ */_._content_branch("<div></div>", /* get, over(1) */" b");
const $get$hoisted_el2 = _._resume("__tests__/template.marko_0_$hoisted_el/hoist", _._hoist("Getter:#div/0", "ConditionalScope:#text/0", "ConditionalScope:#text/0"));
const $getdiv = _._el("__tests__/template.marko_2/#div", "Getter:#div/0");
const $if_content2__setup = $scope => {
  _child($scope["#childScope/1"]);
  _child_input($scope["#childScope/1"], {
    value: $getdiv($scope)
  });
};
const $if_content2 = /* @__PURE__ */_._content_branch(`<div></div>${_child_template}`, /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`, $if_content2__setup);
const $if_content__if = /* @__PURE__ */_._if("#text/0", $if_content2);
const $if_content__input_show = /* @__PURE__ */_._if_closure("input_show", "#text/0", 0, ($scope, input_show) => $if_content__if($scope, input_show ? 0 : 1));
const $if_content__setup = $if_content__input_show;
const $if_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export const $input_show = /* @__PURE__ */_._const("input_show", ($scope, input_show) => {
  $if($scope, input_show ? 0 : 1);
  $if_content__input_show($scope);
});
const $if2 = /* @__PURE__ */_._if("#text/2", $if_content3);
const $hoisted_el3 = /* @__PURE__ */_._const("$hoisted_el", ($scope, $hoisted_el) => _child_input($scope["#childScope/1"], {
  value: $hoisted_el
}));
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
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
  $setup__script($scope);
}
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_show($scope, input.show));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);