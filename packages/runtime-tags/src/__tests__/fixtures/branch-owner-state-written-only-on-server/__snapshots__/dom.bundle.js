// template.marko
const $if_content2__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	document.title = "param " + $scope._.h;
}));
const $if_content__setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	document.title = "own " + $scope._.h;
}));
