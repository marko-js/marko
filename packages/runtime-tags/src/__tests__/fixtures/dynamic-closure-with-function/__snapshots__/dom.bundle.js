// template.marko
const $bar = ($scope) => function(test) {
	return $scope.d + test;
};
_resume("a0", $bar);
