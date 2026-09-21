// template.marko
const $a2 = /*@__PURE__*/ _const(5, _script("a5", ($scope) => $scope.a.textContent = $scope.f.bar() || "missing a"));
const $b2 = /*@__PURE__*/ _const(6, _script("a4", ($scope) => $scope.b.textContent = $scope.g.baz() || "missing b"));
const $c2 = /*@__PURE__*/ _const(7, _script("a3", ($scope) => $scope.c.textContent = $scope.h.baz() || "missing c"));
const $a = ($scope) => () => $scope.d?.bar;
const $b = ($scope) => () => $scope.d?.bar.baz;
const $c = ($scope) => () => $scope.e?.baz;
_resumed.a0 = $a;
_resumed.a1 = $b;
_resumed.a2 = $c;
