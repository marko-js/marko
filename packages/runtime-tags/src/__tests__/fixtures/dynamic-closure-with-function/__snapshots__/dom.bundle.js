// template.marko
function $bar($scope) {
	return function(test) {
		return $scope.d + test;
	};
}
_resume("a0", $bar);
