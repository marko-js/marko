export const $template = "<!><!><hr><!><hr><!><!>";
export const $walks = /* replace, over(2), replace, over(2), replace, over(1) */"D%c%c%bD";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_setHtml = _$.register("__tests__/template.marko_0_$hoisted_setHtml3/hoist", _$.hoist("setHtml3", "LoopScopeMap:#ul/0", "LoopScopeMap:#text/2"));
const $setHtml3$for$content = _$.registerBoundSignal("__tests__/template.marko_4_setHtml3/var", /* @__PURE__ */_$.value("setHtml3"));
const $params3$for$content = /* @__PURE__ */_$.value("$params3");
const $setup$for$content3 = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml3$for$content);
  _child($scope["#childScope/0"]);
};
const $for_content4 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$for$content3, $params3$for$content);
const $for$for$content = /* @__PURE__ */_$.loopTo("#ul/0", $for_content4);
const $params2$for$content = /* @__PURE__ */_$.value("$params2");
const $setup$for$content4 = $scope => {
  $for$for$content($scope, [3, 0, 1]);
};
const $for_content3 = /* @__PURE__ */_$.createRenderer("<ul></ul>", /* get */" ", $setup$for$content4, $params2$for$content);
const $get$hoisted_setHtml2 = _$.hoist("setHtml2", "LoopScopeMap:#text/1");
const $setHtml2$for$content = _$.registerBoundSignal("__tests__/template.marko_2_setHtml2/var", /* @__PURE__ */_$.value("setHtml2"));
const $setup$for$content2 = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml2$for$content);
  _child($scope["#childScope/0"]);
};
const $for_content2 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$for$content2);
const $get$hoisted_setHtml3 = _$.hoist("setHtml", "LoopScopeMap:#text/0");
const $setHtml$for$content = _$.registerBoundSignal("__tests__/template.marko_1_setHtml/var", /* @__PURE__ */_$.value("setHtml"));
const $setup$for$content = $scope => {
  _$.setTagVar($scope, "#childScope/0", $setHtml$for$content);
  _child($scope["#childScope/0"]);
};
const $for_content = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChildWithVar, _child_walks, endChild */`0${_child_walks}&`, $setup$for$content);
const $for3 = /* @__PURE__ */_$.loopTo("#text/2", $for_content3);
const $for2 = /* @__PURE__ */_$.loopTo("#text/1", $for_content2);
const $for = /* @__PURE__ */_$.loopTo("#text/0", $for_content);
const $hoisted_setHtml4_effect = _$.effect("__tests__/template.marko_0_$hoisted_setHtml3", ({
  $hoisted_setHtml3
}) => {
  {
    let i = 0;
    for (const fn of $hoisted_setHtml3) {
      fn(`All (${i++})`);
    }
  }
});
const $hoisted_setHtml4 = /* @__PURE__ */_$.value("$hoisted_setHtml3", $hoisted_setHtml4_effect);
const $to = /* @__PURE__ */_$.state("to/3", ($scope, to) => $for2($scope, [to, 0, 1]));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  $get$hoisted_setHtml3($scope)('First Only');
  $get$hoisted_setHtml2($scope)('First Only');
});
export function $setup($scope) {
  $for($scope, [5, 0, 1]);
  $to($scope, 3);
  $for3($scope, [3, 0, 1]);
  $hoisted_setHtml4($scope, $get$hoisted_setHtml($scope));
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);