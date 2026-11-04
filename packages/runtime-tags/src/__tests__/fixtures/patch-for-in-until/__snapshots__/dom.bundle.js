// template.marko
const $for_content__setup = ($scope) => _text($scope.a, $scope.M);
const $for_content__$params = ($scope, $params2) => _text($scope.b, $params2[1]);
const $for = /*@__PURE__*/ _for_in(0, "<li><!>=<!></li>", "D%c%", $for_content__setup, $for_content__$params);
const $input_label__OR__count = /*@__PURE__*/ _or_patch("a2", 8, ($scope) => $for($scope, [{
	a: $scope.f,
	b: $scope.h
}]));
const $count = _let(7, $input_label__OR__count);
const $setup__script = _script("a1", ($scope) => _on($scope.c, "click", function() {
	$count($scope, +$scope.h + 1);
}));
