// tags/child.marko
const $input_valueChange__script = _script("b0", ($scope) => $scope.c(1));

// template.marko
const $valueChange = ($scope) => function() {
	$scope._.b();
};
const $setter = ($scope) => function() {};
_resume("a1", $valueChange);
_resume("a0", $setter);
