// template.marko
const $if_content2__doubled = /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, $scope._.c));
const $if_content2__setup = $if_content2__doubled;
const $if_content__if = /*@__PURE__*/ _if(1, "<span> </span>", "D ", $if_content2__setup);
const $if_content__n = /*@__PURE__*/ _init_resume("a10", /*@__PURE__*/ _closure_get(9, ($scope) => $if_content__if($scope, $scope._._.g > 1 ? 0 : 1), ($scope) => $scope._._, "a3"));
const $if_content__doubled = /*@__PURE__*/ _const(2, $if_content2__doubled);
const $if_content__value = /*@__PURE__*/ _init_resume("a2", /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__doubled($scope, $scope._.d * 2)));
const $Row_content__tag_input_value = /*@__PURE__*/ _const(3, $if_content__value);
const $n__closure = /*@__PURE__*/ _closure($if_content__n);
const $n = /*@__PURE__*/ _let(6, ($scope) => {
	$Row_content__tag_input_value($scope.a, $scope.g);
	$n__closure($scope);
});
const $setup__script = _script("a7", ($scope) => _on($scope.b, "click", function() {
	$n($scope, +$scope.g + 1);
}));
