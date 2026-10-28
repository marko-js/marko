// tags/child.marko
const $input_a = ($scope, input_a) => _text($scope.a, input_a);
const $input_b = ($scope, input_b) => _text($scope.b, input_b);
const $input = ($scope, input) => {
	_text($scope.c, typeof input.get === "function" ? input.get() : "");
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};

// tags/shape.marko
const $if_content__input_b__OR__s__OR__v = /*@__PURE__*/ _fill_join_if("c5", 4, /*@__PURE__*/ _fill_join("c9", 6, /*@__PURE__*/ _or_resume("c0", 1, ($scope) => $input($scope.a, {
	a: $scope._.e + $scope._._.h,
	b: $scope._._.g
}), 2), ($join) => /*@__PURE__*/ _for_closure(0, /*@__PURE__*/ _if_closure(0, 0, $join))), 0, 0);
const $if_content__s = /*@__PURE__*/ _init_resume("c12", /*@__PURE__*/ _closure_get(10, $if_content__input_b__OR__s__OR__v, ($scope) => $scope._._, "c2"));
const $s__closure = /*@__PURE__*/ _closure($if_content__s);
const $s = /*@__PURE__*/ _fill_let("c10", 7, $s__closure, /*@__PURE__*/ _fill_mark(7, $s__closure));
const $setup__script = _script("c7", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.h + 1);
}));
