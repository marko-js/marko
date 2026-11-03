// tags/child.marko
const $input_a = ($scope, input_a) => _text($scope.a, input_a);
const $input_b = ($scope, input_b) => _text($scope.b, input_b);
const $input = ($scope, input) => {
	_text($scope.c, typeof input.get === "function" ? input.get() : "");
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};

// tags/shape.marko
const $if_content__input_b__OR__s__OR__v = /*@__PURE__*/ _or(1, ($scope) => $input($scope.a, {
	a: $scope._.e + $scope._._.h,
	b: $scope._._.g
}), 2);
const $if_content__s = /*@__PURE__*/ _closure_get(10, $if_content__input_b__OR__s__OR__v, ($scope) => $scope._._, "c1");
const $s = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($if_content__s));
const $setup__script = _script("c2", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.h + 1);
}));
const $input_b__script = _script("c3", ($scope) => document.body.dataset.b = String($scope.g));
