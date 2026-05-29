// total: 1569 (min) 842 (brotli)
// template.marko: 63 (min) 67 (brotli)
function $bar($scope) {
	return function(test) {
		return $scope.d + test;
	};
}
_resume("a0", $bar);
