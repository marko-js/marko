// template.marko
const $if_content2__hoist3_getter = _hoist_resume("a4", 2);
const $if_content2__x__OR__later__OR__z__script = _script("a5", ($scope) => {
	$scope._._.e();
	$scope.a();
	$scope._._.f()();
});
const $hoist1_getter = _hoist_resume("a3", 6);
const $hoist2 = ($scope) => () => $scope._._.d;
const $later = ($scope) => () => $hoist1_getter($scope);
const $hoist = ($scope) => () => $scope.d;
_resumed.a2 = $hoist2;
_resumed.a0 = $later;
_resumed.a1 = $hoist;
