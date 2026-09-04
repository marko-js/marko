// tags/list/index.marko
const $for_content__input_suffix = /*@__PURE__*/ _fill_join("b0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.b, $scope._.e)));
const $for_content__setup = $for_content__input_suffix;
const $for_content__item = ($scope, item) => _text($scope.a, item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(0, "<li><!><!></li>", "D%b%", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input_suffix = /*@__PURE__*/ _fill_const("b0", 4, $for_content__input_suffix);

// template.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => $input_items($scope.a, $scope.f ? ["a", "b"] : ["a"]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
const $input_s = _fill_const("a0", 4, ($scope) => $input_suffix($scope.a, $scope.e));
