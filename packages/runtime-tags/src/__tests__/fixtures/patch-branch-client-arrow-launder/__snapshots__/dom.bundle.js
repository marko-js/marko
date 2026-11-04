// template.marko
const $if_content__mk = /*@__PURE__*/ _const(1, ($scope) => _text($scope.a, ((fn = $scope.b) => fn())()));
const $if_content__input_title = /*@__PURE__*/ _if_closure_patch("a0", 0, 0, ($scope) => $if_content__mk($scope, () => $scope._.e));
const $if = /*@__PURE__*/ _if(0, "<p> </p>", "D ", $if_content__input_title);
const $open = _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
