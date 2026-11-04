// tags/child.marko
const $input = ($scope, input) => {
	_text($scope.c, typeof input.get === "function" ? input.get() : "");
	_text($scope.a, input.a);
	_text($scope.b, input.b);
};

// tags/shape.marko
const $if_content__input_b__OR__s__OR__v = /*@__PURE__*/ _or_patch("c1", 1, ($scope) => $input($scope.a, {
	a: $scope._.e + $scope._._.h,
	b: $scope._._.g
}), 2);
const $if_content__s = /*@__PURE__*/ _closure_get_patch("c2", 10, $if_content__input_b__OR__s__OR__v, ($scope) => $scope._._);
const $s = /*@__PURE__*/ _fill_let("c9", 7, /* @__PURE__ */ _closure($if_content__s));
const $setup__script = _script("c7", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.h + 1);
}));
