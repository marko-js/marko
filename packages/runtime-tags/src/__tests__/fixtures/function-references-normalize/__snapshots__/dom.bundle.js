// total: 1498 (min) 825 (brotli)
// template.marko: 92 (min) 80 (brotli)
const $baz2__script = _script("a1", ($scope) => $scope.a.textContent = $scope.c.bar());
function $baz($scope) {
	return () => $scope.b?.bar;
}
_resume("a0", $baz);
