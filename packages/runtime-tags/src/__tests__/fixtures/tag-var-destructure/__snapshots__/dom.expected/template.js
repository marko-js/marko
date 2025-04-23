export const $template = "<button><pre>a    1    <!></pre><pre>b    2    <!></pre><pre>c  {c:4}  <!></pre><pre>d    7    <!></pre><pre>f   [9]   <!></pre></button>";
export const $walks = /* get, next(2), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(2) */" Eb%lDb%lDb%lDb%lDb%m";
const noop = $noop;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $a = /* @__PURE__ */_$.state("a/6", ($scope, a) => _$.data($scope["#text/1"], a));
const $b = /* @__PURE__ */_$.state("b/7", ($scope, b) => _$.data($scope["#text/2"], b));
const $c = /* @__PURE__ */_$.state("c/8", ($scope, c) => _$.data($scope["#text/3"], JSON.stringify(c)));
const $d = /* @__PURE__ */_$.state("d/9", ($scope, d) => _$.data($scope["#text/4"], d));
const $e = /* @__PURE__ */_$.state("e/10", ($scope, e) => _$.data($scope["#text/5"], JSON.stringify(e)));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/0"], "click", function () {
  let local;
  (($result2, $a2, $b2, $c2) => ({
    a: $a2,
    _b: {
      _b: $b2
    },
    local,
    ...$c2
  } = $result2, $a($scope, $a2), $b($scope, $b2), $c($scope, $c2), $result2))({
    a: 1,
    _b: {
      _b: 2
    },
    local: 3,
    c: 4
  });
  noop((($result, $d2, $e2) => ([{
    arr: [local, $d2,, ...$e2]
  }] = $result, $d($scope, $d2), $e($scope, $e2), $result))([{
    arr: [6, 7, 8, 9]
  }]));
}));
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
  $c($scope, {});
  $d($scope, 0);
  $e($scope, []);
  $setup_effect($scope);
}
function $noop(_) {}
_$.register("__tests__/template.marko_0/noop", $noop);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);