// template.marko
const $for_content__votes = /*@__PURE__*/ _fill_let("a0", 7, ($scope) => _text($scope.b, $scope.h));
const $for_content__setup = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$for_content__votes($scope, $scope.h + 1);
}));
