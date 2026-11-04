// template.marko
const $if_content__input_note = /*@__PURE__*/ _closure_get_patch("a0", 7, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._, "a3", 0);
const $for_content__if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__input_note);
const $for_content__expand = /*@__PURE__*/ _for_closure_patch("a5", 0, ($scope) => $for_content__if($scope, $scope._.g ? 0 : 1), 8);
const $expand = _let(6, $for_content__expand);
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$expand($scope, !$scope.g);
}));
