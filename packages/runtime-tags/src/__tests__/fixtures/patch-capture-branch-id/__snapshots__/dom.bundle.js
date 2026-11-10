// tags/label.marko
const $get__script = _script_patch("b0 d", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});

// template.marko
const $get = ($scope) => function() {
	return $scope.b;
};
_bind_resume("a0 b", $get);
