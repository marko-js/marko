// tags/child.marko
const $for_content__input_a__OR__item__script = _script("b1", ($scope) => $scope.b.textContent = "s:" + $scope.d + $scope._.e);
const $for_content__input_a__OR__item = /*@__PURE__*/ _fill_join_for("b3", 4, /*@__PURE__*/ _shell_or("b2", 4, ($scope) => {
	$for_content__input_a__OR__item__script($scope);
	_text($scope.a, $scope._.e + $scope.d);
}), 0);
const $for_content__input_a = /*@__PURE__*/ _for_closure(0, $for_content__input_a__OR__item);
const $input_a = /*@__PURE__*/ _const(4, $for_content__input_a);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 7, ($scope) => $input_a($scope.b, "m" + $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, +$scope.h + 1);
}));
