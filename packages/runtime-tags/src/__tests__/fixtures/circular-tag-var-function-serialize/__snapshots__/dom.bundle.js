// tags/child.marko
const $input_valueChange__script = _script("b0", ($scope) => $scope.c(1));

// template.marko
function $valueChange($scope) {
	return function() {
		$scope._.b();
	};
}
function $setter($scope) {
	return function() {};
}
_resume("a1", $valueChange);
_resume("a0", $setter);
