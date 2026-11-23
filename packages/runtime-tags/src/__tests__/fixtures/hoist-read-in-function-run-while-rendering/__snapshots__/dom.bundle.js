// template.marko
const $a_getter = _hoist_resume("a2", 6);
const $setup__script = _script("a3", ($scope) => {
	_on($scope.a, "click", function() {
		console.log($scope.f());
	});
	_on($scope.b, "click", function() {
		const direct = $a_getter($scope);
		console.log(direct());
	});
});
const $a = ($scope) => () => $scope.d;
const $getA = ($scope) => () => $a_getter($scope);
_resumed.a1 = $a;
_resumed.a0 = $getA;
