// total: 1701 (min) 878 (brotli)
// template.marko: 319 (min) 123 (brotli)
const $a2__script = _script("a5", ($scope) => $scope.a.textContent = $scope.f.bar() || "missing a");
const $b2__script = _script("a4", ($scope) => $scope.b.textContent = $scope.g.baz() || "missing b");
const $c2__script = _script("a3", ($scope) => $scope.c.textContent = $scope.h.baz() || "missing c");
function $a($scope) {
	return () => $scope.d?.bar;
}
function $b($scope) {
	return () => $scope.d?.bar.baz;
}
function $c($scope) {
	return () => $scope.e?.baz;
}
_resume("a0", $a);
_resume("a1", $b);
_resume("a2", $c);
