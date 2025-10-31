export const $template = "<!><!><hr><!><hr><!><!>";
export const $walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $get$hoisted_setHtml = _._resume("__tests__/template.marko_0_$hoisted_setHtml3/hoist", _._hoist("setHtml3", "LoopScopeMap:#ul/0", "LoopScopeMap:#text/2"));
const $for_content4__setHtml = _._var_resume("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_._const("setHtml3", $scope => _._assert_hoist($scope.setHtml3)));
const $for_content4__setup = $scope => {
  _._var($scope, "#childScope/0", $for_content4__setHtml);
  _child($scope["#childScope/0"]);
};
const $for_content4 = /* @__PURE__ */_._content_branch(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $for_content4__setup);
const $for_content3__for = /* @__PURE__ */_._for_to("#ul/0", $for_content4);
const $for_content3__setup = $scope => {
  $for_content3__for($scope, [3, 0, 1]);
};
const $for_content3 = /* @__PURE__ */_._content_branch("<ul></ul>", /* get, over(1) */" b", $for_content3__setup);
const $get$hoisted_setHtml2 = _._hoist("setHtml2", "LoopScopeMap:#text/1");
const $for_content2__setHtml = _._var_resume("__tests__/template.marko_2_setHtml2/var", /* @__PURE__ */_._const("setHtml2", $scope => _._assert_hoist($scope.setHtml2)));
const $for_content2__setup = $scope => {
  _._var($scope, "#childScope/0", $for_content2__setHtml);
  _child($scope["#childScope/0"]);
};
const $for_content2 = /* @__PURE__ */_._content_branch(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $for_content2__setup);
const $get$hoisted_setHtml3 = _._hoist("setHtml", "LoopScopeMap:#text/0");
const $for_content__setHtml = _._var_resume("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_._const("setHtml", $scope => _._assert_hoist($scope.setHtml)));
const $for_content__setup = $scope => {
  _._var($scope, "#childScope/0", $for_content__setHtml);
  _child($scope["#childScope/0"]);
};
const $for_content = /* @__PURE__ */_._content_branch(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $for_content__setup);
const $for = /* @__PURE__ */_._for_to("#text/0", $for_content);
const $for2 = /* @__PURE__ */_._for_to("#text/1", $for_content2);
const $to = /* @__PURE__ */_._let("to/3", $scope => $for2($scope, [$scope.to, 0, 1]));
const $for3 = /* @__PURE__ */_._for_to("#text/2", $for_content3);
const $hoisted_setHtml4__script = _._script("__tests__/template.marko_0_$hoisted_setHtml3", $scope => {
  {
    let i = 0;
    for (const fn of $scope.$hoisted_setHtml3) {
      fn(`All (${i++})`);
    }
  }
});
const $hoisted_setHtml4 = /* @__PURE__ */_._const("$hoisted_setHtml3", $hoisted_setHtml4__script);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  $get$hoisted_setHtml3($scope)('First Only');
  $get$hoisted_setHtml2($scope)('First Only');
});
export function $setup($scope) {
  $for($scope, [5, 0, 1]);
  $to($scope, 3);
  $for3($scope, [3, 0, 1]);
  $hoisted_setHtml4($scope, $get$hoisted_setHtml($scope));
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);