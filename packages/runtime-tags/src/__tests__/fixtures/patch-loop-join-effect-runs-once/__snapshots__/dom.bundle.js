// tags/child.marko
const $for_content__input_a__OR__item__script = _script("b0", ($scope) => console.log("run", $scope.c + $scope._.e));
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_signal("4 b3", /*@__PURE__*/ _or_resume("b1", 3, ($scope) => {
	_text($scope.a, $scope._.e + $scope.c);
	$for_content__input_a__OR__item__script($scope);
}), _for_closure, 0);
const $for_content__input_a = /*@__PURE__*/ _for_closure(0, $for_content__input_a__OR__item);
const $input_a = /*@__PURE__*/ _const(4, $for_content__input_a);

// template.marko
const $n = /*@__PURE__*/ _let(5, ($scope) => $input_a($scope.a, "m" + $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.f + 1);
}));
