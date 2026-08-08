// tags/child.marko
const $input__script = _script("b0", ($scope) => $scope.b.action());

// template.marko
const $setup__script = _script("a2", ($scope) => $scope.b.innerHTML = "works");
const $action2 = ($scope) => function() {
	$scope.b.classList.add("child2");
};
const $action = ($scope) => function() {
	$scope.b.classList.add("child1");
};
_resume("a1", $action2);
_resume("a0", $action);
