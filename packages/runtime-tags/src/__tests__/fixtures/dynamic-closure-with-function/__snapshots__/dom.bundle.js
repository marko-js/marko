// total: 1372 (min) 770 (brotli)
// template.marko: 63 (min) 67 (brotli)
function $bar($scope) {
	return function(test) {
		return $scope.d + test;
	};
}
_resume("a0", $bar);
