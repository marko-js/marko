export const $template = "<button id=outer>Toggle Outer</button><button id=middle>Toggle Middle</button><button id=inner>Toggle Inner</button><pre></pre><!><!>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), replace, over(2) */" b b b b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $write as _child_input_write, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $if_content3__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_name($scope["#childScope/0"], "Inner");
  $if_content3__write($scope);
};
const $if_content3__write = /* @__PURE__ */_._closure_get("write", ($scope, write) => _child_input_write($scope["#childScope/0"], write), $scope => $scope._._._);
const $if_content3 = /* @__PURE__ */_._content_branch(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, $if_content3__setup);
const $if_content2__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_name($scope["#childScope/0"], "Middle");
  $if_content2__showInner($scope);
  $if_content2__write($scope);
};
const $if_content2__write = /* @__PURE__ */_._closure_get("write", ($scope, write) => _child_input_write($scope["#childScope/0"], write), $scope => $scope._._);
const $if_content2__if = /* @__PURE__ */_._if("#text/1", $if_content3);
const $if_content2__showInner = /* @__PURE__ */_._closure_get("showInner", ($scope, showInner) => $if_content2__if($scope, showInner ? 0 : 1), $scope => $scope._._);
const $if_content2 = /* @__PURE__ */_._content_branch(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace, out(1) */`D/${_child_walks}&%l`, $if_content2__setup);
const $if_content__setup = $scope => {
  _child($scope["#childScope/0"]);
  _child_input_name($scope["#childScope/0"], "Outer");
  $if_content__showMiddle._($scope);
  $if_content__write._($scope);
};
const $if_content__write = /* @__PURE__ */_._if_closure("write", "#text/4", 0, ($scope, write) => _child_input_write($scope["#childScope/0"], write));
const $if_content__if = /* @__PURE__ */_._if("#text/1", $if_content2);
const $if_content__showMiddle = /* @__PURE__ */_._if_closure("showMiddle", "#text/4", 0, ($scope, showMiddle) => $if_content__if($scope, showMiddle ? 0 : 1));
const $if_content = /* @__PURE__ */_._content_branch(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace, out(1) */`D/${_child_walks}&%l`, $if_content__setup);
const $if = /* @__PURE__ */_._if("#text/4", $if_content);
const $showOuter__script = _._script("__tests__/template.marko_0_showOuter", ($scope, {
  showOuter
}) => _._on($scope["#button/0"], "click", function () {
  $showOuter($scope, showOuter = !showOuter);
}));
const $showOuter = /* @__PURE__ */_._let("showOuter/5", ($scope, showOuter) => {
  $if($scope, showOuter ? 0 : 1);
  $showOuter__script($scope);
});
const $showMiddle__script = _._script("__tests__/template.marko_0_showMiddle", ($scope, {
  showMiddle
}) => _._on($scope["#button/1"], "click", function () {
  $showMiddle($scope, showMiddle = !showMiddle);
}));
const $showMiddle = /* @__PURE__ */_._let("showMiddle/6", $scope => {
  $if_content__showMiddle($scope);
  $showMiddle__script($scope);
});
const $showInner__closure = /* @__PURE__ */_._closure($if_content2__showInner);
const $showInner__script = _._script("__tests__/template.marko_0_showInner", ($scope, {
  showInner
}) => _._on($scope["#button/2"], "click", function () {
  $showInner($scope, showInner = !showInner);
}));
const $showInner = /* @__PURE__ */_._let("showInner/7", $scope => {
  $showInner__closure($scope);
  $showInner__script($scope);
});
const $write2 = /* @__PURE__ */_._const("write");
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
_._resume("__tests__/template.marko_0/write", $write);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);