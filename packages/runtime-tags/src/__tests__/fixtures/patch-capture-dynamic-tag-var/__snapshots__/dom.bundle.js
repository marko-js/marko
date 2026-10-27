// tags/label.marko
const $get__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});
const $get$1 = /*@__PURE__*/ _const(3, $get__script);

// template.marko
const $picked = _var_resume("a1", /*@__PURE__*/ _const(6, ($scope) => $get$1($scope.c, $get($scope))));
const $get = ($scope) => function() {
	return $scope.g;
};
_bind_resume("a0 g", $get);
