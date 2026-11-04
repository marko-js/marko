// template.marko
const $placeholder_content__input_msg = /*@__PURE__*/ _closure_get_patch("a0", 8, ($scope) => _text($scope.a, $scope._.f), 0, "a7", 0);
const $placeholder_content = _content$1("a5", "<em>loading <!></em>", "Db%", $placeholder_content__input_msg);
const $count = _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a6", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
