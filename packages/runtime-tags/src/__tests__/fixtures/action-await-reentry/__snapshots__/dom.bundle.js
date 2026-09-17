// template.marko
const $shown = /*@__PURE__*/ _draft(6, ($scope) => _text($scope.b, $scope.g));
const $late2 = /*@__PURE__*/ _action(9, ($scope) => $late_pending($scope, $scope.j.pending));
const $native2 = /*@__PURE__*/ _action(11, ($scope) => $native_pending($scope, $scope.l.pending));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.j();
	});
	_on($scope.c, "click", function() {
		$scope.l();
	});
});
const $late_pending = /*@__PURE__*/ _const(10, ($scope) => _text($scope.d, $scope.k ? "late" : "-"));
const $native_pending = /*@__PURE__*/ _const(12, ($scope) => _text($scope.e, $scope.m ? "native" : "-"));
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
