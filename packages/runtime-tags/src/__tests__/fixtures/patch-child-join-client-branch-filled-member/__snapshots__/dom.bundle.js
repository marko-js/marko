// tags/child.marko
const $if_content2__input_a__script = _script("b2", ($scope) => $scope.a.textContent = "s:" + $scope._.g);
const $if_content2__input_a = /*@__PURE__*/ _fill_join("b5", 6, /*@__PURE__*/ _fill_join("b4", 6, /*@__PURE__*/ _if_closure(1, 0, $if_content2__input_a__script)));
const $if_content2__setup = $if_content2__input_a;
const $if_content__input_a__OR__input_b = /*@__PURE__*/ _fill_join_if("b6", 7, /*@__PURE__*/ _fill_join_if("b5", 6, /*@__PURE__*/ _fill_join("b4", 6, /*@__PURE__*/ _patch_or("b1", 1, ($scope) => _text($scope.a, $scope._.g + $scope._.h)), () => () => {}), 0, 0), 0, 0);
const $if_content__input_b = /*@__PURE__*/ _if_closure(0, 0, $if_content__input_a__OR__input_b);
const $if2 = /*@__PURE__*/ _if(1, "<div></div>", " ", $if_content2__setup);
const $open = /*@__PURE__*/ _fill_let("b7", 8, ($scope) => $if2($scope, $scope.i ? 0 : 1));
const $setup__script$1 = _script("b3", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
const $input_b = /*@__PURE__*/ _const(7, $if_content__input_b);

// template.marko
const $n = /*@__PURE__*/ _fill_let("a1", 8, ($scope) => $input_b($scope.a, $scope.i));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$n($scope, $scope.i + "k");
}));
