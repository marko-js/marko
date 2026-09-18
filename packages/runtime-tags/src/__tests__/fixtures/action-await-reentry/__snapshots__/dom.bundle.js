// template.marko
const $shown = /*@__PURE__*/ _draft(6, 5, ($scope) => _text($scope.b, $scope.g));
const $late2 = /*@__PURE__*/ _action(8, ($scope) => $late_pending($scope, $scope.i.pending));
const $native2 = /*@__PURE__*/ _action(10, ($scope) => $native_pending($scope, $scope.k.pending));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.i();
	});
	_on($scope.c, "click", function() {
		$scope.k();
	});
});
const $late_pending = /*@__PURE__*/ _const(9, ($scope) => _text($scope.d, $scope.j ? "late" : "-"));
const $native_pending = /*@__PURE__*/ _const(11, ($scope) => _text($scope.e, $scope.l ? "native" : "-"));
const $late = ($scope) => /*@__PURE__*/ _act(function* () {
	yield resolveAfter(0);
	$shown($scope, 7, 1);
	yield resolveAfter(0);
}, 1, $scope, $late2);
const $native = ($scope) => /*@__PURE__*/ _act(async function() {
	arguments;
	$shown($scope, 8, 1);
	await resolveAfter(0);
	$shown($scope, 9, 1);
}, 0, $scope, $native2);
_resume("a0", $late);
_resume("a1", $native);
