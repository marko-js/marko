// total: 1961 (min) 979 (brotli)
// tags/child.marko: 24 (min) 28 (brotli)
const $input_valueChange__script = _script("b0", ($scope) => $scope.c(1));

// template.marko: 107 (min) 62 (brotli)
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
