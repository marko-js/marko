// total: 2276 (min) 1135 (brotli)
// template.marko: 136 (min) 86 (brotli)
const $if_content2__hoist3_getter = _hoist_resume("a3", 0);
const $hoist1_getter = _hoist_resume("a2", 4);
function $hoist2($scope) {
	return () => $scope._._.d;
}
function $hoist($scope) {
	return () => $scope.d;
}
_resume("a1", $hoist2);
_resume("a0", $hoist);
