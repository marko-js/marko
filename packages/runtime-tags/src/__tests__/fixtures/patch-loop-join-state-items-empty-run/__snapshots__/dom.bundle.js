// tags/child.marko
const $for_content__input_a__OR__d = /*@__PURE__*/ _fill_signal("5 b4", /*@__PURE__*/ _or_resume("b1", 5, ($scope) => _text($scope.a, $scope._.f + $scope.e)), _for_closure, 0);
const $for_content__d = /*@__PURE__*/ _const(4, $for_content__input_a__OR__d);
const $for_content__input_b__OR__item = /*@__PURE__*/ _fill_signal("4 b3", /*@__PURE__*/ _or_resume("b0", 3, ($scope) => $for_content__d($scope, $scope._.e + $scope.c)), _for_closure, 0);
const $for_content__input_b = /*@__PURE__*/ _for_closure(0, $for_content__input_b__OR__item);
const $for_content__setup = ($scope) => {
	$for_content__input_b._($scope);
	$for_content__input_a._($scope);
};
const $for_content__input_a = /*@__PURE__*/ _for_closure(0, $for_content__input_a__OR__d);
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__input_b__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);

// template.marko
const $list = /*@__PURE__*/ _let(6, ($scope) => $input_items($scope.a, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$list($scope, $scope.g.concat("r"));
}));
