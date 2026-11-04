// template.marko
const $for_content__input_selected = /*@__PURE__*/ _for_selector_patch("a0", 0, 4, ($scope) => _text($scope.b, $scope._._.e === $scope.M ? "*" : ""), ($scope) => $scope._);
const $for_content__setup = ($scope) => {
	$for_content__input_selected._($scope);
	_text($scope.a, $scope.M);
};
const $if_content__input_selected = /*@__PURE__*/ _if_closure_patch("a2", 0, 0, $for_content__input_selected);
const $if_content__setup = ($scope) => {
	$if_content__input_selected._($scope);
	$if_content__rows._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(0, "<li><!><!></li>", "D%b%", $for_content__setup);
const $if_content__rows = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.f, "id"]));
const $rows = _let(5, ($scope) => {
	$rows_length($scope, $scope.f?.length);
	$if_content__rows($scope);
});
const $if = /*@__PURE__*/ _if(0, "<ul></ul>", " ", $if_content__setup);
const $rows_length = /*@__PURE__*/ _const(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$rows($scope, [...$scope.f, { id: $scope.f.length + 1 }]);
}));
