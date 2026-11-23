// template.marko
const $a_getter = _hoist_resume("a2", 5);
const $setup__script = _script("a3", ($scope) => _on($scope.a, "click", function() {
	console.log($scope.e());
}));
const $a = ($scope) => () => $scope.c;
const $obj = ($scope) => () => $a_getter($scope);
_resumed.a1 = $a;
_resumed.a0 = $obj;
