// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for = /*@__PURE__*/ _for_to(0, "<span> </span>", "D ", $for_content__setup);
const $input_from__OR__count = /*@__PURE__*/ _or_patch("a1", 6, ($scope) => $for($scope, [$scope.f, $scope.e]));
const $count = _let(5, $input_from__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
