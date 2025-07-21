export const $template = "<button id=outer>Toggle Outer</button><button id=middle>Toggle Middle</button><button id=inner>Toggle Inner</button><pre></pre><!><!>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), replace, over(1) */" b b b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $write as _child_input_write, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $setup$if$content3 = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_name($scope["#childScope/0"], "Inner");
  $write$if$content3($scope);
};
const $write$if$content3 = /* @__PURE__ */_$.dynamicClosureRead("write", ($scope, write) => _child_input_write($scope["#childScope/0"], write), $scope => $scope._._._);
const $if_content3 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $setup$if$content3);
const $setup$if$content2 = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_name($scope["#childScope/0"], "Middle");
  $showInner$if$content($scope);
  $write$if$content2($scope);
};
const $write$if$content2 = /* @__PURE__ */_$.dynamicClosureRead("write", ($scope, write) => _child_input_write($scope["#childScope/0"], write), $scope => $scope._._);
const $if$if$content = /* @__PURE__ */_$.conditional("#text/1", $if_content3);
const $showInner$if$content = /* @__PURE__ */_$.dynamicClosureRead("showInner", ($scope, showInner) => $if$if$content($scope, showInner ? 0 : 1), $scope => $scope._._);
const $if_content2 = /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, $setup$if$content2);
const $setup$if$content = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_name($scope["#childScope/0"], "Outer");
  $showMiddle$if$content._($scope);
  $write$if$content._($scope);
};
const $write$if$content = /* @__PURE__ */_$.conditionalClosure("write", "#text/4", 0, ($scope, write) => _child_input_write($scope["#childScope/0"], write));
const $if$if$content2 = /* @__PURE__ */_$.conditional("#text/1", $if_content2);
const $showMiddle$if$content = /* @__PURE__ */_$.conditionalClosure("showMiddle", "#text/4", 0, ($scope, showMiddle) => $if$if$content2($scope, showMiddle ? 0 : 1));
const $if_content = /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, $setup$if$content);
const $if = /* @__PURE__ */_$.conditional("#text/4", $if_content);
const $showOuter_effect = _$.effect("__tests__/template.marko_0_showOuter", ($scope, {
  showOuter
}) => _$.on($scope["#button/0"], "click", function () {
  $showOuter($scope, showOuter = !showOuter);
}));
const $showOuter = /* @__PURE__ */_$.state("showOuter/5", ($scope, showOuter) => {
  $if($scope, showOuter ? 0 : 1);
  $showOuter_effect($scope);
});
const $showMiddle_effect = _$.effect("__tests__/template.marko_0_showMiddle", ($scope, {
  showMiddle
}) => _$.on($scope["#button/1"], "click", function () {
  $showMiddle($scope, showMiddle = !showMiddle);
}));
const $showMiddle = /* @__PURE__ */_$.state("showMiddle/6", $scope => {
  $showMiddle$if$content($scope);
  $showMiddle_effect($scope);
});
const $showInner_closure = /* @__PURE__ */_$.dynamicClosure($showInner$if$content);
const $showInner_effect = _$.effect("__tests__/template.marko_0_showInner", ($scope, {
  showInner
}) => _$.on($scope["#button/2"], "click", function () {
  $showInner($scope, showInner = !showInner);
}));
const $showInner = /* @__PURE__ */_$.state("showInner/7", $scope => {
  $showInner_closure($scope);
  $showInner_effect($scope);
});
const $write2 = /* @__PURE__ */_$.value("write");
export function $setup($scope) {
  $showOuter($scope, true);
  $showMiddle($scope, true);
  $showInner($scope, true);
  $write2($scope, $write($scope));
}
function $write($scope) {
  return function (msg) {
    $scope["#pre/3"].innerHTML += '\n' + msg;
  };
}
_$.register("__tests__/template.marko_0/write", $write);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);