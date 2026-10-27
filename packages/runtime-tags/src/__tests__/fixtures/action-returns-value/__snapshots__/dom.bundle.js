// template.marko
const $bump2 = _action(7, "a5");
const $result = /*@__PURE__*/ _let(2, ($scope) => {
	_text($scope.b, $scope.c);
	$bump2($scope, $bump($scope));
});
const $double2 = _action(3, "a3");
const $busy = _action(5, "a4");
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$result($scope, $scope.d(4));
	$scope.f();
	$scope.h(1);
}));
const $bump = ($scope) => function(by) {
	$result($scope, $scope.c + by);
};
function $double(x) {
	return x * 2;
}
_resumed.a2 = $bump;
_resumed.a1 = $double;
