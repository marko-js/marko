// template.marko
const $if_content__input_note = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._), _closure);
const $for_content__if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__input_note);
const $for_content__expand = /*@__PURE__*/ _for_closure(0, ($scope) => $for_content__if($scope, $scope._.g ? 0 : 1));
const $expand = /*@__PURE__*/ _let(6, $for_content__expand);
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$expand($scope, !$scope.g);
}));
