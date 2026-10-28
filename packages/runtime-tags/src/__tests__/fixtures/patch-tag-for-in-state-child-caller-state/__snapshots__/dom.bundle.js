// tags/child.marko
const $input_a = ($scope, input_a) => _text($scope.a, input_a);
const $input_b$1 = ($scope, input_b) => _text($scope.b, input_b);
const $input = ($scope, input) => {
	_text($scope.c, typeof input.get === "function" ? input.get() : "");
	$input_a($scope, input.a);
	$input_b$1($scope, input.b);
};

// tags/shape.marko
const $if_content__input_b__OR__s__OR__v = /*@__PURE__*/ _fill_join_if("c5", 4, /*@__PURE__*/ _fill_join("c9", 6, /*@__PURE__*/ _or_resume("c0", 1, ($scope) => $input($scope.a, {
	a: $scope._.e + $scope._._.h,
	b: $scope._._.g
}), 2), ($join) => /*@__PURE__*/ _for_closure(0, /*@__PURE__*/ _if_closure(0, 0, $join))), 0, 0);
const $if_content__input_b = /*@__PURE__*/ _closure_get(9, $if_content__input_b__OR__s__OR__v, ($scope) => $scope._._, "c1");
const $if_content__s = /*@__PURE__*/ _init_resume("c12", /*@__PURE__*/ _closure_get(10, $if_content__input_b__OR__s__OR__v, ($scope) => $scope._._, "c2"));
const $s = /*@__PURE__*/ _fill_let("c10", 7, /* @__PURE__ */ _closure($if_content__s));
const $setup__script$1 = _script("c7", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.h + 1);
}));
const $input_b__closure = /*@__PURE__*/ _closure($if_content__input_b);
const $input_b = /*@__PURE__*/ _fill_const("c9", 6, $input_b__closure);

// template.marko
const $b = _let(6, ($scope) => $input_b($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$b($scope, $scope.g + "!");
}));
