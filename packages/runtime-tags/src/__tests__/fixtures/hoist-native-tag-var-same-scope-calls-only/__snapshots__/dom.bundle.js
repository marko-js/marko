// total: 1617 (min) 864 (brotli)
// tags/child.marko: 30 (min) 34 (brotli)
const $input__script = _script("b0", ($scope) => $scope.b.action());

// template.marko: 193 (min) 117 (brotli)
const $setup__script = _script("a2", ($scope) => $scope.b.innerHTML = "works");
function $action2($scope) {
	return function() {
		$scope.b.classList.add("child2");
	};
}
function $action($scope) {
	return function() {
		$scope.b.classList.add("child1");
	};
}
_resume("a1", $action2);
_resume("a0", $action);
