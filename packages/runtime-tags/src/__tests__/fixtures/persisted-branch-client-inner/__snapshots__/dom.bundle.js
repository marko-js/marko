// template.marko
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("a0", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._), 0);
const $if_content__if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content2__input_title);
const $if_content__count = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__if($scope, $scope._.g > 1 ? 0 : 1));
const $count = /*@__PURE__*/ _let(6, $if_content__count);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.g + 1);
}));
