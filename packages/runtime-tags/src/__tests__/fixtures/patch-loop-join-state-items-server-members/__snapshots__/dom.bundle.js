// tags/child.marko
const $for_content__input_a__OR__input_b = /*@__PURE__*/ _fill_signal("4 b2 b3,5 b4 b5", /*@__PURE__*/ _or_resume("b0", 1, ($scope) => _text($scope.a, $scope._.e + $scope._.f)), _for_closure, 0);
const $for_content__input_a = /*@__PURE__*/ _for_closure(0, $for_content__input_a__OR__input_b);
const $for_content__setup = ($scope) => {
	$for_content__input_a._($scope);
	$for_content__input_b._($scope);
};
const $for_content__input_b = /*@__PURE__*/ _for_closure(0, $for_content__input_a__OR__input_b);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<p> </p>", "D ", $for_content__setup);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $list = /*@__PURE__*/ _let(6, ($scope) => $input_items($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, $scope.g.concat("r"));
}));
