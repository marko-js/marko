// tags/list/index.marko
const $for_content__input_suffix = /*@__PURE__*/ _for_closure_patch("b0", 0, ($scope) => _text($scope.b, $scope._.e), 5);
const $for_content__setup = $for_content__input_suffix;
const $for_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $count = _let(5, ($scope) => $input_items($scope.a, $scope.f ? ["a", "b"] : ["a"]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
