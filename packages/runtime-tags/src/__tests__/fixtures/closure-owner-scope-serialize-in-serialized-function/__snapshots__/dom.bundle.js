// total: 1534 (min) 839 (brotli)
// template.marko: 134 (min) 94 (brotli)
const $if_content__run__script = _script("a2", ($scope) => $scope.b());
function $run($scope) {
	return function() {
		$scope.a.innerHTML = $scope._.b();
	};
}
function $text() {
	return "HI";
}
_resume("a1", $run);
_resume("a0", $text);
