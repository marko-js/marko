// template.marko
const $input_x__OR__input_onClick__script = _script("a0", ($scope) => _on($scope.e, "click", $scope.h ? $scope.j : "noop"));
const $input_x__script = _script("a2", ($scope) => {
	_on($scope.a, "click", $scope.h ? () => {} : null);
	_on($scope.b, "click", $scope.h ? false : null);
	_on($scope.c, "click", $scope.h ? "" : void 0);
});
const $input_count__script = _script("a1", ($scope) => _on($scope.d, "click", $scope.i - $scope.i));
