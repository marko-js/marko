// tags/child.marko
const $input_x__OR__input_y = /*@__PURE__*/ _or(4, ($scope) => _return($scope, { list: [$scope.c + $scope.d] }));
const $input_x = /*@__PURE__*/ _const(2, $input_x__OR__input_y);
const $input_y = /*@__PURE__*/ _const(3, $input_x__OR__input_y);

// template.marko
const $for_content__other__OR__item = /*@__PURE__*/ _or(3, ($scope) => _text($scope.a, $scope.c + $scope._.f));
const $for_content__other = /*@__PURE__*/ _for_closure(2, $for_content__other__OR__item, 9, 1);
const $for_content__setup = $for_content__other;
const $for_content__item = /*@__PURE__*/ _const(2, $for_content__other__OR__item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $count = /*@__PURE__*/ _let(4, ($scope) => $input_x($scope.a, $scope.e));
const $other = /*@__PURE__*/ _let(5, ($scope) => {
	$input_y($scope.a, $scope.f);
	$for_content__other($scope);
});
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.e + 1);
	$other($scope, +$scope.f + 1);
}));
const $o = ($scope, o) => $for($scope, [o.list]);
const $r = _var_resume("a0", ($scope, r) => $o($scope, { ...r }));
const $for = /*@__PURE__*/ _for_of_unkeyed(2, "<p> </p>", "D ", $for_content__setup, $for_content__$params);
