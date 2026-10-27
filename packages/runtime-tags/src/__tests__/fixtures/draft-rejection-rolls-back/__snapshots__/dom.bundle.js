// template.marko
const $d = /*@__PURE__*/ _draft(5, ($scope) => _text($scope.b, $scope.f));
const $fail2 = _action(7, "a2");
const $failNow2 = _action(9, "a3");
const $caught = /*@__PURE__*/ _let(11, ($scope) => _text($scope.c, $scope.l));
const $setup__script = _script("a4", ($scope) => {
	_on($scope.a, "click", function() {
		$scope.h().catch((error) => {
			$caught($scope, error.message);
		});
	});
	_on($scope.d, "click", function() {
		try {
			$scope.j();
		} catch (error) {
			$caught($scope, error.message);
		}
	});
});
const $fail = ($scope) => async () => {
	$d($scope, 5);
	await resolveAfter(0);
	throw new Error("failed");
};
const $failNow = ($scope) => function() {
	$d($scope, 6);
	throw new Error("failed now");
};
_resumed.a0 = $fail;
_resumed.a1 = $failNow;
