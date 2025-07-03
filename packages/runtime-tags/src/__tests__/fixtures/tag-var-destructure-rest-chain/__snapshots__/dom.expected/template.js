export const $template = "<div class=abc><!> <!> <!></div><div class=rest> </div><div class=rest2> </div><div class=rest3> </div>";
export const $walks = /* next(1), replace, over(2), replace, over(2), replace, out(1), next(1), get, out(1), next(1), get, out(1), next(1), get, out(1) */"D%c%c%lD lD lD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_$.value("$pattern", ($scope, $pattern) => {
  (({
    a,
    ...rest
  }) => $rest($scope, rest))($pattern);
  (({
    a,
    b,
    ...rest2
  }) => $rest2($scope, rest2))($pattern);
  (({
    a,
    b,
    c,
    ...rest3
  }) => $rest3($scope, rest3))($pattern);
  $a($scope, $pattern.a);
  $b($scope, $pattern.b);
  $c($scope, $pattern.c);
});
const $rest = /* @__PURE__ */_$.value("rest", ($scope, rest) => _$.data($scope["#text/3"], JSON.stringify(rest)));
const $rest2 = /* @__PURE__ */_$.value("rest2", ($scope, rest2) => _$.data($scope["#text/4"], JSON.stringify(rest2)));
const $rest3 = /* @__PURE__ */_$.value("rest3", ($scope, rest3) => _$.data($scope["#text/5"], JSON.stringify(rest3)));
const $a = /* @__PURE__ */_$.value("a", ($scope, a) => _$.data($scope["#text/0"], a));
const $b = /* @__PURE__ */_$.value("b", ($scope, b) => _$.data($scope["#text/1"], b));
const $c = /* @__PURE__ */_$.value("c", ($scope, c) => _$.data($scope["#text/2"], c));
export function $setup($scope) {
  $pattern2($scope, {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  });
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);