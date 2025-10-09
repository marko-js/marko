export const $template = "<button><pre>a    1    <!></pre><pre>b    2    <!></pre><pre>c  {c:4}  <!></pre><pre>d    7    <!></pre><pre>f   [9]   <!></pre></button>";
export const $walks = /* get, next(2), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(1), next(1), over(1), replace, out(2) */" Eb%lDb%lDb%lDb%lDb%m";
function noop(_) {}
import * as _2 from "@marko/runtime-tags/debug/dom";
const $a = /* @__PURE__ */_2._let("a/6", ($scope, a) => _2._text($scope["#text/1"], a));
const $b = /* @__PURE__ */_2._let("b/7", ($scope, b) => _2._text($scope["#text/2"], b));
const $c = /* @__PURE__ */_2._let("c/8", ($scope, c) => _2._text($scope["#text/3"], JSON.stringify(c)));
const $d = /* @__PURE__ */_2._let("d/9", ($scope, d) => _2._text($scope["#text/4"], d));
const $e = /* @__PURE__ */_2._let("e/10", ($scope, e) => _2._text($scope["#text/5"], JSON.stringify(e)));
const $setup__script = _2._script("__tests__/template.marko_0", $scope => _2._on($scope["#button/0"], "click", function () {
  let local;
  (($result2, $a2, $b2, unused, $c2) => ({
    a: $a2,
    _b: {
      _b: $b2
    },
    local,
    unused,
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
  /* unused */0;
  $setup__script($scope);
}
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup);