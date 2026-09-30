// template.marko
const $placeholder_content__input_msg = /*@__PURE__*/ _fill_join_closure("a8", 5, _closure_get(8, ($scope) => _text($scope.a, $scope._.f), 0, "a3"), 0);
const $placeholder_content = _content$1("a6", "<em>loading <!></em>", "Db%", $placeholder_content__input_msg);
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
