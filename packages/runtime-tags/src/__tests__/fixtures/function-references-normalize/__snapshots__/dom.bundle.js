// template.marko
const $baz2 = /* @__PURE__ */ _const(2, _script("a1", ($scope) => $scope.a.textContent = $scope.c.bar()));
function $baz($scope) {
	return () => $scope.b?.bar;
}
_resume("a0", $baz);
