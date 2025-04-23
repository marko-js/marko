export const $template = "<!><!><hr><!><hr><!><!>";
export const $walks = /* replace, over(2), replace, over(2), replace, over(1) */"D%c%c%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_el = _$.register("__tests__/template.marko_0_$hoisted_el3/hoist", _$.hoist("Getter:#li/0", "LoopScopeMap:#ul/0", "LoopScopeMap:#text/2"));
const $expr_i_j$for$content = /* @__PURE__ */_$.intersection(3, $scope => {
  const {
    _: {
      i
    },
    j
  } = $scope;
  _$.attr($scope["#li/0"], "data-index", i * 4 + j);
});
const $i$for$content = /* @__PURE__ */_$.loopClosure("i", "#ul/0", $expr_i_j$for$content);
const $j$for$content = /* @__PURE__ */_$.value("j", $expr_i_j$for$content);
const $params3$for$content = /* @__PURE__ */_$.value("$params3", ($scope, $params3) => $j$for$content($scope, $params3[0]));
const $for_content4 = /* @__PURE__ */_$.createRenderer("<li></li>", /* get */" ", 0, $params3$for$content, $scope => $i$for$content._($scope));
const $for$for$content = /* @__PURE__ */_$.loopTo("#ul/0", $for_content4);
const $setup$for$content = $scope => {
  $for$for$content($scope, [3, 0, 1]);
};
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $i$for$content2($scope, $params2[0]));
const $i$for$content2 = /* @__PURE__ */_$.value("i");
const $for_content3 = /* @__PURE__ */_$.createRenderer("<ul></ul>", /* get */" ", $setup$for$content, $params2$for$content);
const $get$hoisted_el2 = _$.hoist("Getter:#div/0", "LoopScopeMap:#text/1");
const $for_content2 = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const $get$hoisted_el3 = _$.hoist("Getter:#div/0", "LoopScopeMap:#text/0");
const $for_content = /* @__PURE__ */_$.createRenderer("<div></div>", /* get */" ");
const $for = /* @__PURE__ */_$.loopTo("#text/0", $for_content);
const $for2 = /* @__PURE__ */_$.loopTo("#text/1", $for_content2);
const $to = /* @__PURE__ */_$.state("to/3", ($scope, to) => $for2($scope, [to, 0, 1]));
const $for3 = /* @__PURE__ */_$.loopTo("#text/2", $for_content3);
const $hoisted_el4_effect = _$.effect("__tests__/template.marko_0_$hoisted_el3", ({
  $hoisted_el3
}) => {
  {
    let i = 0;
    for (const el of $hoisted_el3) {
      el().innerHTML = `All (${i++})`;
    }
  }
});
const $hoisted_el4 = /* @__PURE__ */_$.value("$hoisted_el3", $hoisted_el4_effect);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  {
    const first = $get$hoisted_el3($scope)();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
  {
    const first = $get$hoisted_el2($scope)();
    if (first) {
      first.innerHTML = 'First Only';
    }
  }
});
export function $setup($scope) {
  $for($scope, [5, 0, 1]);
  $to($scope, 3);
  $for3($scope, [3, 0, 1]);
  $hoisted_el4($scope, $get$hoisted_el($scope));
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);