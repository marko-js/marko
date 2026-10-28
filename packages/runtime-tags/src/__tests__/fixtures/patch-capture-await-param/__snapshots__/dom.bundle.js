// tags/label.marko
const $get__script = _script("b0", ($scope) => {
	$scope.a.textContent = $scope.d();
	console.log("run", $scope.d());
});

// template.marko
const $get = ($scope) => function() {
	return $scope.c;
};
_bind_resume("a0 c", $get);
